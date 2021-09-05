/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import API from 'services/api';

import routes from './routes';
import { ILogin } from './models';

class SessionAPI {
  // constructor() {}

  login = async ({ emailOrUsername, password }: ILogin): Promise<boolean> => {
    const resp = await API.post(routes.login, { emailOrUsername, password });
    if (resp.status === 200) {
      const { token } = resp.data;
      token && localStorage.setItem('token', token);
      return true;
    }
    return false;
  };
}

export default new SessionAPI();
