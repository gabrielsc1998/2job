const userSchema = require('./schema');
const { USER_EMPLOYEE, USER_EMPLOYER } = require('../../config');

class UserModule {

	async create(userInfo) {

		try {
			const { type, name, email, username } = userInfo;


			if(type === USER_EMPLOYER) {
				const { companyName, cnpj } = userInfo;

			} else {

			}
    } catch(error) {
      
    }

	}

}

module.exports = new UserModule();