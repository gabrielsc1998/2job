/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 * 
 */

import API from 'services/api';

import { routes } from './routes';
import { CreateCompany } from './models';

class CompanyAPI {

  // constructor() {}

  async create({name, email, password}: CreateCompany): Promise<boolean> {
    const resp = await API.post(routes.create, {name, email, password});
    if(resp.status === 201) {
      return true;
    }
    return false;
  }
  

}

export default new CompanyAPI();