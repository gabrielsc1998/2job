const _ = require('lodash');
const { validationResult } = require('express-validator');

const dev = require('../modules');

const checkError = (request) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    throw errors.array();
  }
}

class DevController {

  async create(request, response) {
    try {
      checkError(request);
      const payloadCreateDev = request.body;
      await dev.create(payloadCreateDev);
      response.status(201).send({ msg: 'Dev created!' });
    } catch(error) {
      response.status(400).send({ error });
    }
  }

  async getById(request, response) {
    try {
      checkError(request);
      const { id } = request.params;
      const devById = await dev.getById(id);
      response.status(200).send(devById);
    } catch(error) {
      response.status(400).send({ error });
    }
  }
  
  async listAll(request, response) {
    try {
      checkError(request);
      const devList = await dev.listAll();
      response.status(200).send(devList);
    } catch(error) {
      response.status(400).send({ error });
    }
  }

  async deleteById(request, response) {
    try {
      checkError(request);
      await dev.deleteById(request.params.id);
      response.status(200).send({ msg: 'Dev deleted!' });
    } catch(error) {
      response.status(400).send({ error });
    }
  }
  
}

module.exports = new DevController();