import { body } from 'express-validator';

import controller from '../controllers';

const BASE_PATH = '/session';
const routes = [
  
  {
    method: 'POST',
    path: `/login`,
    validations: [
      body('emailOrUsername').isString(),
      body('password').isString(),
    ],
    handler: controller.login
  },
  
]

export { BASE_PATH, routes };