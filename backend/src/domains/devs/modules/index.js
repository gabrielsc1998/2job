const _ = require('lodash');

const devModel = require('./schema');

class DevModel {

	constructor() {}

	create(payload) {
		return new Promise(async (resolve, reject) => {
			try {
				const ret = await devModel.create(payload);
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
				const ret = await devModel.findById(id);
				resolve(ret);
			} catch (error) {
				reject(error);
			}
		});
	}

	listAll() {
		return new Promise(async (resolve, reject) => {
			try {
				const ret = await devModel.find();
				resolve(ret);
			} catch (error) {
				reject(error);
			}
		});
	}

	deleteById(id) {
		return new Promise(async (resolve, reject) => {
			try {
				const ret = await devModel.findByIdAndRemove(id);
				resolve(ret);
			} catch (error) {
				reject(error);
			}
		});
	}

}

module.exports = new DevModel();