const { body, param, query } = require('express-validator');

const controller = require('../controllers');

const routes = [
  
  {
    method: 'POST',
    path: `/login`,
    validations: [
      body('emailOrUser').isString(),
      body('password').isString(),
    ],
    handler: controller.create
  },
  
]

module.exports = { routes };