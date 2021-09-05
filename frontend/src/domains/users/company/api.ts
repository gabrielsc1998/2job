/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import API from 'services/api';

import routes from './routes';
import { ICreateCompany } from './models';

class CompanyAPI {
  // constructor() {}

  create = async (payload: ICreateCompany): Promise<boolean> => {
    const { name, email, password } = payload;
    const resp = await API.post(routes.create, { name, email, password });
    if (resp.status === 201) {
      return true;
    }
    return false;
  };
}

export default new CompanyAPI();
