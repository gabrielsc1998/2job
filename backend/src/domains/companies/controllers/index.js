const _ = require('lodash');
const { validationResult } = require('express-validator');

const company = require('../modules');

const checkError = (request) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    throw errors.array();
  }
}

class CompanyController {

  async create(request, response) {
    try {
      checkError(request);
      const payloadCreateCompany = request.body;
      await company.create(payloadCreateCompany);
      response.status(201).send({ msg: 'Company created!' });
    } catch(error) {
      response.status(400).send({ error });
    }
  }

  async getById(request, response) {
    try {
      checkError(request);
      const { id } = request.params;
      const getCompany = await company.getById(id);
      response.status(200).send(getCompany);
    } catch(error) {
      response.status(400).send({ error });
    }
  }
  
  async listAll(request, response) {
    try {
      checkError(request);
      const companyList = await company.listAll();
      response.status(200).send(companyList);
    } catch(error) {
      response.status(400).send({ error });
    }
  }

  async deleteById(request, response) {
    try {
      checkError(request);
      await company.deleteById(request.params.id);
      response.status(200).send({ msg: 'Dev deleted!' });
    } catch(error) {
      response.status(400).send({ error });
    }
  }

}

module.exports = new CompanyController();