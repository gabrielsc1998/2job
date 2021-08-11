/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 * 
 */

import { CreateCompany } from './models';
import API from 'services/api';

const CONTEXT = '/company';
const ROUTES = {
  CREATE: `${CONTEXT}/create`
};

class CompanyAPI {

  // constructor() {}

  async create({name, email, password}: CreateCompany): Promise<boolean> {
    const resp = await API.post(ROUTES.CREATE, {name, email, password});
    if(resp.status === 201) {
      return true;
    }
    return false;
  }
  

}

export default new CompanyAPI();