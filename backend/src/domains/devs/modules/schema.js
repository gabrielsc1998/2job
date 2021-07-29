const mongoose = require("../../dataBase");
// const bcrypt = require("bcryptjs");

const DevSchema = new mongoose.Schema({	

	name: {
		type: String,
		require: true,
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

	country: {
		type: String,
		require: true,
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

const dev = mongoose.model("Dev", DevSchema);
module.exports = dev;



// Antes de salvar, criptografa a senha
// pre -> função do "mongoose" para dizer que 
// se quer que algo aconteça antes de salvar
// userSchema.pre("save", async function(next)
// {
// 	// this -> ponteiro para o dado a ser salvo
// 	// Faz a criptografia da senha com "10 rounds" - padrão
// 	const passwordHash = await bcrypt.hash(this.password, 10);
// 	// Passa a senha criptografada para a senha
// 	this.password = passwordHash;

// 	next();
// });