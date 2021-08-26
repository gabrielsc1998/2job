import _ from 'lodash';
import { validationResult } from 'express-validator';

import { Request, Response } from '../../../server/types';

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

  login = async (request: Request, response: Response): Promise<void> =>  {
    try {
      // checkError(request);
      const { emailOrUsername, password } = request.body;
      
      const resp = await sessionModule.findOne({ email: emailOrUsername });
      console.log(resp);
      // const payloadCreateCompany = request.body;
      // await company.create(payloadCreateCompany);
      if(emailOrUsername === 'teste' && password === '123') {
        response.status(200).send({ msg: 'Logged!' });
      } else {
        response.status(400).send({ msg: 'No Logged!' });
      }
    } catch(error) {
      response.status(400).send({ error });
    }
  }

}

export default new Session();