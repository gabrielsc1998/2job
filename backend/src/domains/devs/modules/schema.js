const db = require('../../../database');
const cryptography = require('../../security/cryptography');

const mongoose = db.getInstance();

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

DevSchema.pre("save", async function(next) {
	// const salt = crypto.randomBytes(Math.ceil(32/2))
	// 						 .toString('hex')
	// 						 .slice(0,16); 

	// cryptography.createSalt();


	// let hash = crypto.createHmac('sha512', salt);
  // hash.update(this.password);
  // this.password = hash.digest('hex');

	// const senhaESalt = sha512('abcd1234', salt)
	// console.log(senhaESalt)
	// console.log(this.password === senhaESalt.hash);

	const { salt, password } = cryptography.encryptThePassword(this.password);
	this.salt = salt;
	this.password = password;
	next();
});

const dev = mongoose.model("dev", DevSchema);
module.exports = dev;



