import _ from 'lodash';
import { validationResult } from 'express-validator';

import { Request, Response } from '../../../server/types';

import dev from '../modules';

const checkError = (request: Request) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    throw errors.array();
  }
}

class DevController {

  create = async (request: Request, response: Response) => {
    try {
      checkError(request);
      const payloadCreateDev = request.body;
      await dev.create(payloadCreateDev);
      response.status(201).send({ msg: 'Dev created!' });
    } catch(error) {
      response.status(400).send({ error });
    }
  }

  getById = async (request: Request, response: Response) => {
    try {
      checkError(request);
      const { id } = request.params;
      const devById = await dev.getById(id);
      response.status(200).send(devById);
    } catch(error) {
      response.status(400).send({ error });
    }
  }
  
  listAll = async (request: Request, response: Response) => {
    try {
      checkError(request);
      const devList = await dev.listAll();
      response.status(200).send(devList);
    } catch(error) {
      response.status(400).send({ error });
    }
  }

  deleteById = async (request: Request, response: Response) => {
    try {
      checkError(request);
      await dev.deleteById(request.params.id);
      response.status(200).send({ msg: 'Dev deleted!' });
    } catch(error) {
      response.status(400).send({ error });
    }
  }
  
}

export default new DevController();