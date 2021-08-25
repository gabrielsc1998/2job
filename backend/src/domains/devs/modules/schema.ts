import mongoose from 'mongoose';

import cryptography from '../../security/cryptography';

export interface IDev extends mongoose.Document {
  salt: string,
  password: string
}

const DevSchema = new mongoose.Schema({	

	name: {
		type: String,
		require: true,
	},

	birthDate: {
		type: String
	},

  username: {
    type: String,
    unique: true,
    require: true,
		lowercase: true,
  },

	email: {
		type: String,
		unique: true,
		require: true,
		lowercase: true,
	},

	salt: {
		type: String,
		select: false
	},

	password: {
		type: String,
		require: true,
		select: false,
	},

	occupationArea: {
		type: String,
		require: true
	},

	technologies: [String],

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

DevSchema.pre<IDev>('save', function(next: any) {
		const { salt, password } = cryptography.encryptThePassword(this.password);
		this.salt = salt;
		this.password = password;
		next();
	}
);

export default mongoose.model("dev", DevSchema);


