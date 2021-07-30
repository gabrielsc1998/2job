const devModel = require('./schema');

class DevModel {

	constructor() {}

	async create(devInfo) {

		try {

			// console.log(devInfo);

			// const { 
			// 	name, 
			// 	birthDate,
			// 	email, 
			// 	username,
			// 	password,
			// 	occupationArea,
			// 	technologies,
			// 	state,
			// 	city
			// } = devInfo;
			
			const ret = await devModel.create(devInfo);
			console.log(ret)
			return ret != undefined;

    } catch(error) {
      
    }

	}

}

module.exports = new DevModel();