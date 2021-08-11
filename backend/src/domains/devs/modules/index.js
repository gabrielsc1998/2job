const _ = require('lodash');

const devModel = require('./schema');

class DevModel {

	constructor() {}

	async create(payload) {
		try {
			return await devModel.create(payload);
		} catch (error) {
			return { error };
		}
	}

	async getById(id) {
		try {
			if(!_.isString(id)) {
				throw `Invalid id type`;
			}
			return await devModel.findById(id);
		} catch (error) {
			return { error };
		}
	}

	async listAll() {
		try {
			return await devModel.find();
		} catch (error) {
			return { error };
		}
	}

	async deleteById(id) {
		try {
			if(!_.isString(id)) {
				throw `Invalid id type`;
			}
			return await devModel.findByIdAndRemove(id);
		} catch (error) {
			return { error };
		}
	}

}

module.exports = new DevModel();