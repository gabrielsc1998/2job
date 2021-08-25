const _ = require('lodash');
const { validationResult } = require('express-validator');

import { Request, Response } from "../../../server/types";

const checkError = (request: Request) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    throw errors.array();
  }
}

class Session {

  login = async (request: Request, response: Response): Promise<void> =>  {
    try {
      checkError(request);
      const { emailOrUsername, password } = request.body;
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