import { body, param } from 'express-validator';

import controller from '../controllers';

const BASE_PATH = '/companies';
const routes = [
  
  {
    method: 'POST',
    path: `/create`,
    validations: [
      body('email').isEmail(),
      body('name').isString(),
      body('password').isString(),
      // body('state').isString(),
      // body('city').isString()
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