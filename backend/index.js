const db = require('./src/database');

const { body } = require('express-validator');

async function serverInitialize() {
  if(await db.start()) {
    const Dev = require('./src/domains/devs/controllers');
    
    app = require('./src/app');
    const { Router } = require('express');
    const router = Router();
    
    const test = () => {
      const validations = [
        body('email').isEmail(),
        body('name').isString(),
      ]
      return validations;
    }
    router.post('/dev/create', test(), Dev.create);
    
    app.use(router);
  }
}

serverInitialize();

