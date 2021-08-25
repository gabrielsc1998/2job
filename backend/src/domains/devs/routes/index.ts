import { body, param } from 'express-validator';

import controller from '../controllers';

const BASE_PATH = '/devs';
const routes = [
  
  {
    method: 'POST',
    path: `/create`,
    validations: [
      body('email').isEmail(),
      body('name').isString(),
      // body('occupationArea').isString(),
      // body('technologies').isArray(),
      // body('state').isString(),
      // body('city').isString()
      body('password').isString()
    ],
    handler: controller.create
  },
  
  {
    method: 'GET',
    path: `/:id`,
    validations: [
      param('id').isMongoId()
    ],
    handler: controller.getById
  },

  {
    method: 'GET',
    path: `/`,
    handler: controller.listAll
  },
  
  {
    method: 'DELETE',
    path: `/:id`,
    validations: [
      param('id').isMongoId()
    ],
    handler: controller.deleteById
  },
]

export { BASE_PATH, routes };