import _ from 'lodash';
import { validationResult } from 'express-validator';

import { Request, Response } from "../../../server/types";

import company from '../modules';

const checkError = (request: Request) => {
  const errors = validationResult(request);
  if(!errors.isEmpty()) {
    throw errors.array();
  }
}

class CompanyController {

  create = async (request: Request, response: Response) => {
    try {
      checkError(request);
      const payloadCreateCompany = request.body;
      await company.create(payloadCreateCompany);
      response.status(201).send({ msg: 'Company created!' });
    } catch(error) {
      response.status(400).send({ error });
    }
  }

  getById = async (request: Request, response: Response) => {
    try {
      checkError(request);
      const { id } = request.params;
      const getCompany = await company.getById(id);
      response.status(200).send(getCompany);
    } catch(error) {
      response.status(400).send({ error });
    }
  }
  
  listAll = async (request: Request, response: Response) => {
    try {
      checkError(request);
      const companyList = await company.listAll();
      response.status(200).send(companyList);
    } catch(error) {
      response.status(400).send({ error });
    }
  }

  deleteById = async (request: Request, response: Response) => {
    try {
      checkError(request);
      await company.deleteById(request.params.id);
      response.status(200).send({ msg: 'Dev deleted!' });
    } catch(error) {
      response.status(400).send({ error });
    }
  }

}

export default new CompanyController();