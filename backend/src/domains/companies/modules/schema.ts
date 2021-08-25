import mongoose from 'mongoose';

import cryptography from '../../security/cryptography';

export interface ICompany extends mongoose.Document {
  salt: string,
  password: string
}

const CompanySchema = new mongoose.Schema({	

	email: {
		type: String,
		require: true,
		unique: true,
		lowercase: true,
	},

	password: {
		type: String,
		require: true,
		select: false,
	},

	name: {
		type: String,
		require: true,
		unique: true,
	},

	state: {
		type: String,
		require: true,
	},

	city: {
		type: String,
		require: true,
	},

	createAt: {
		type: Date,
		default: Date.now,
	},

});

CompanySchema.pre<ICompany>('save', function(next: any) {
	const { salt, password } = cryptography.encryptThePassword(this.password);
	this.salt = salt;
	this.password = password;
	next();
}
);


export default mongoose.model("company", CompanySchema);
