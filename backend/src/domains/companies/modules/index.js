const _ = require('lodash');

const companyModel = require('./schema');

class CompanyModule {

	constructor() {}

	create(payload) {
		return new Promise(async (resolve, reject) => {
			try {
				const ret = await companyModel.create(payload);
				resolve(ret);
			} catch (error) {
				reject(error);
			}
		});
	}

	getById(id) {
		return new Promise(async (resolve, reject) => {
			try {
				if(!_.isString(id)) {
					throw `invalid id type`;
				}
				const ret = await companyModel.findById(id);
				resolve(ret);
			} catch (error) {
				reject(error);
			}
		});
	}

	listAll() {
		return new Promise(async (resolve, reject) => {
			try {
				const ret = await companyModel.find();
				resolve(ret);
			} catch (error) {
				reject(error);
			}
		});
	}

	deleteById(id) {
		return new Promise(async (resolve, reject) => {
			try {
				const ret = await companyModel.findByIdAndRemove(id);
				resolve(ret);
			} catch (error) {
				reject(error);
			}
		});
	}

}

module.exports = new CompanyModule();