/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import API from 'services/api';

import routes from './routes';
import { CreateUser } from './models';

class DevAPI {

  // constructor() {}

  async create({name, email, password}: CreateUser): Promise<boolean> {
    console.log(routes.create)
    const resp = await API.post(routes.create, {name, email, password});
    if(resp.status === 201) {
      return true;
    }
    return false;
  }
  

}

export default new DevAPI();