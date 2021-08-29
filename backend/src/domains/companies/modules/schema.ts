import _ from 'lodash';
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
	
	salt: {
		type: String,
		select: false
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
	try {
		const cryptographyResp = cryptography.encryptThePassword(this.password);
		if(!_.isUndefined(cryptographyResp)) {
			this.salt = cryptographyResp.salt;
			this.password = cryptographyResp.password;
		} else {
			throw `Error to encrypt the password!`;
		}
	} catch(error) {
		console.log(` ## pre save company => ${error}`);
	}
	next();
});

export default mongoose.model("company", CompanySchema);
