/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

 import API from 'services/api';

 import routes from './routes';
 import { Login } from './models';
 
 class SessionAPI {
 
   // constructor() {}
 
  async login({emailOrUsername, password}: Login): Promise<boolean> {
    console.log(emailOrUsername, password)
    const resp = await API.post(routes.login, {emailOrUsername, password});
    if(resp.status === 200) {
      return true;
    }
    return false;
  }
   
 
 }
 
 export default new SessionAPI();