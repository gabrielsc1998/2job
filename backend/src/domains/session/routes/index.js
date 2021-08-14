const { body, param, query } = require('express-validator');

const controller = require('../controllers');

const BASE_PATH = '/company';
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
  
]

module.exports = { BASE_PATH, routes };