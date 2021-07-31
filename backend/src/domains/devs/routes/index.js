const controller = require('../controllers');

const { body } = require('express-validator');

const BASE_PATH = '/dev';

const routes = [
  {
    method: 'POST',
    path: `/create`,
    validations: [
      body('email').isEmail(),
      body('name').isString(),
    ],
    handler: controller.create,
  }
]

module.exports = {
  BASE_PATH,
  routes
}