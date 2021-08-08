import { CreateUser } from './models';
import API from 'services/api';

class DevAPI {

  // constructor() {}

  async create({email, password}: CreateUser) {
    const resp = await API.post('/dev/create', {email, password});
    console.log(resp)
  }
  

}

export default new DevAPI();