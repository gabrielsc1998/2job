/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import { CreateUser } from './models';
import API from 'services/api';

const CONTEXT = '/dev';
const ROUTES = {
  CREATE: `${CONTEXT}/create`
};

class DevAPI {

  // constructor() {}

  async create({name, email, password}: CreateUser): Promise<boolean> {
    const resp = await API.post(ROUTES.CREATE, {name, email, password});
    if(resp.status === 201) {
      return true;
    }
    return false;
  }
  

}

export default new DevAPI();