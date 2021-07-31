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
      const devList = await dev.getById(request.params.id);
      response.status(200).send(devList);
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

  // async read(request, response) {
  // }

  // async update(request, response) {
  //   const { id } = request.params;
  //   const { name } = request.body;

  //   const categoryExists = await CategoriesRepository.findById(id);

  //   if (!categoryExists) {
  //     return response.status(404).json({ error: 'Category not found' });
  //   }

  //   if (!name) {
  //     return response.status(404).json({ error: 'Name is required' });
  //   }

  //   const categoryByName = await CategoriesRepository.findByName(name);

  //   if (categoryByName && categoryByName.id !== id) {
  //     return response.status(400).json({ error: 'This name is already in use' });
  //   }

  //   const category = await CategoriesRepository.update(id, name);

  //   return response.status(200).json(category);
  // }

  // async delete(request, response) {
  //   const { id } = request.params;

  //   await CategoriesRepository.delete(id);

  //   return response.sendStatus(204);
  // }
}

module.exports = new DevController();