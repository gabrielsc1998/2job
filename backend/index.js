const db = require('./src/database');
const server = require('./src/server');

const { body } = require('express-validator');

const domains = require('./src/domains')
async function appStart() {

  if(await db.connect()) {
    const Dev = require('./src/domains/devs/controllers');
  
    if(await server.start()) {

      domains.startRoutes(server);
      // const router = server.getRouter();
      
      // const test = () => {
      //   const validations = [
      //     body('email').isEmail(),
      //     body('name').isString(),
      //   ]
      //   return validations;
      // }
      // router.post('create', test(), Dev.create);
      
      // server.useRouter('/dev', router);
    }
  }
}

appStart();