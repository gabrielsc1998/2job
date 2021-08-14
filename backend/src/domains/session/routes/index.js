const { body, param, query } = require('express-validator');

const controller = require('../controllers');

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

module.exports = { BASE_PATH, routes };