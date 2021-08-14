const _ = require('lodash');

class Session {

  async login(request, response) {
    try {
      // const payloadCreateCompany = request.body;
      // await company.create(payloadCreateCompany);
      response.status(201).send({ msg: 'Company created!' });
    } catch(error) {
      response.status(400).send({ error });
    }
  }

}

module.exports = new Session();