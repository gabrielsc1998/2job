const express = require('express');
const cors = require('cors');

const app = express();
const { Router } = require('express');

class Server {

  constructor() {
    this._config();
  }

  _config() {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  }

  async start() {
    return new Promise(async (resolve, reject) => {
      try {
        const { port=3000 } = require('../../config').app;
        await app.listen(port, (error) => {
          if(error) {
            console.log(` ## Error to start server [${error}]`);
            resolve(false);
          } else {
            console.log(` ## Server started - listening on http://localhost:${port}`);
            resolve(true);
          }
        });
      } catch(error) {
        reject(error);
      }
    });
  }

  use(method) {
    try {
      app.use(method);
    } catch(error) {
      console.log(` ## Error to user [${error}]`);
    }
  }

  useRouter(path, router) {
    try {
      return app.use(path, router);
    } catch(error) {
      console.log(` ## Error to useRouter [${error}]`);
    }
  }

  getRouter() {
    try {
      const router = Router();
      return router;
    } catch (error) {
      console.log(` ## Error to getRouter [${error}]`);
    }
    return undefined;
  }

  getMethod(method) {
    try {
      const httpMethods = {
        GET: 'GET',
        PUT: 'PUT',
        POST: 'POST',
        DELETE: 'DELETE',
      };
      return httpMethods[method];
    } catch (error) {
      console.log(` ## Error to getMethod [${error}]`);
    }
    return undefined;
  }

}

module.exports = new Server();