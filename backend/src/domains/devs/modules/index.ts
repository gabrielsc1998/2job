import _ from 'lodash';

import devModel from './schema';

class DevModel {

	constructor() {}

	create = async (payload: any) => {
		try {
			return await devModel.create(payload);
		} catch (error) {
			return { error };
		}
	}

	getById = async (id: string) => {
		try {
			if(!_.isString(id)) {
				throw `Invalid id type`;
			}
			return await devModel.findById(id);
		} catch (error) {
			return { error };
		}
	}

	listAll = async () => {
		try {
			return await devModel.find();
		} catch (error) {
			return { error };
		}
	}

	deleteById = async (id: string) => {
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

export default new DevModel();