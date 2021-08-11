const _ = require('lodash');

const companyModel = require('./schema');

class CompanyModule {

	constructor() {}

	async create(payload) {
		try {
			return await companyModel.create(payload);
		} catch (error) {
			return { error };
		}
	}

	async getById(id) {
		try {
			if(!_.isString(id)) {
				throw `Invalid id type`;
			}
			return await companyModel.findById(id);
		} catch (error) {
			return { error };
		}
	}

	async listAll() {
		try {
			const ret = await companyModel.find();
			return ret;
		} catch (error) {
			return { error };
		}
	}

	async deleteById(id) {
		try {
			const ret = await companyModel.findByIdAndRemove(id);
			return ret;
		} catch (error) {
			return { error };
		}
	}

}

module.exports = new CompanyModule();