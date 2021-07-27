const mongoose = require("../../dataBase");
// const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({	

	type: {
		type: String,
		require: true,
	},

	name: {
		type: String,
		require: true,
	},

  username: {
    type: String,
    unique: true,
    require: true
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

	companyName: {
		type: String,
	},

	cnpj: {
		type: String
	},

	createAt: {
		type: Date,
		default: Date.now,
	},

});

const user = mongoose.model("User", UserSchema);
module.exports = user;



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