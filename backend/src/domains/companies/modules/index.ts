import _ from 'lodash';

import companyModel from './schema';

class CompanyModule {

	constructor() {}

	create = async (payload: any) => {
		try {
			return await companyModel.create(payload);
		} catch (error) {
			return { error };
		}
	}

	getById = async (id: string) => {
		try {
			if(!_.isString(id)) {
				throw `Invalid id type`;
			}
			return await companyModel.findById(id);
		} catch (error) {
			return { error };
		}
	}

	listAll = async ()  =>{
		try {
			const ret = await companyModel.find();
			return ret;
		} catch (error) {
			return { error };
		}
	}

	deleteById = async (id: string) => {
		try {
			const ret = await companyModel.findByIdAndRemove(id);
			return ret;
		} catch (error) {
			return { error };
		}
	}

}

export default new CompanyModule();