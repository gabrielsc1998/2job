const mongoose = require("../../dataBase");
// const bcrypt = require("bcryptjs");

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

const company = mongoose.model("Company", CompanySchema);
module.exports = company;



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