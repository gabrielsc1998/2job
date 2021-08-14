const _ = require('lodash');
const { validationResult } = require('express-validator');

const checkError = (request) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    throw errors.array();
  }
}

class Session {

  async login(request, response) {
    try {
      checkError(request);
      const { emailOrUsername, password } = request.body;
      console.log(emailOrUsername, password)
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

module.exports = new Session();