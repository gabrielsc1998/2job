import _ from 'lodash';
import { validationResult } from 'express-validator';

import cryptography from '../../security/cryptography';
import { Request, Response } from '../../../server/types';
import authentication from '../../security/authentication';

import sessionModule from '../modules';

const checkError = (request: Request) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    throw errors.array();
  }
}

class Session {

  private _controllers: Array<any> = [];

  constructor() {
    // this._controllers.push(DevsController);
    // this._controllers.push(CompaniesController);
  }

  private _validateSaltAndPassword = (salt: string, password: string): boolean => {
    if(!_.isUndefined(salt) && _.isString(salt)) {
      if(!_.isUndefined(password) && _.isString(password)) {
        return true;
      }
    }
    return false;
  }

  login = async (request: Request, response: Response): Promise<void> =>  {
    try {
      // checkError(request);
      const { emailOrUsername, password } = request.body;
      const resp = await sessionModule.findOne({ email: emailOrUsername });
      if(!_.isUndefined(resp) && !_.isEmpty(resp)) {
        if(this._validateSaltAndPassword(resp.salt, resp.password)) {
          if(cryptography.comparePassword({
            password,
            storedSalt: resp.salt,
            storedPassword: resp.password
          })) {
            const token = authentication.createToken(resp.id);
            response.status(200).send({ msg: 'Authorized!', id: resp.id, token });
            return;
          }
        }
      }

      response.status(401).send({ msg: 'Not authorized!' });
    } catch(error) {
      response.status(400).send({ error });
    }
  }

}

export default new Session();