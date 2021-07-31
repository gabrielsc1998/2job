const { body, param, query } = require('express-validator');

const controller = require('../controllers');

const BASE_PATH = '/dev';
const routes = [
  
  {
    method: 'POST',
    path: `/create`,
    validations: [
      body('email').isEmail(),
      body('name').isString(),
      body('occupationArea').isString(),
      body('technologies').isArray(),
      body('state').isString(),
      body('city').isString()
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

module.exports = { BASE_PATH, routes };