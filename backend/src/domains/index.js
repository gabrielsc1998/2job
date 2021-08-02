const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const SUBDIR_ROUTES = 'routes';

class Domains {

  constructor() {
    this.domainRoutes = [];
    this._sweepAndGet();
  }

  _sweepAndGet() {
    // Busca em cada domínio o arquivo 'routes' e importa as rotas, inserindo no array 'domainRoutes'
    fs  
      .readdirSync(__dirname)
      .forEach(subDir => {
        if(subDir.indexOf('.js') === -1) {
          const filesAndSubDir = fs.readdirSync(path.resolve(`${__dirname}/${subDir}`));
          if(filesAndSubDir.length != 0) {
            const routesDir = filesAndSubDir.filter(subDir => subDir === SUBDIR_ROUTES)
            if(routesDir.length != 0) {
              const pathResolved = path.resolve(`${__dirname}/${subDir}/${SUBDIR_ROUTES}`, 'index.js');
              this.domainRoutes.push(require(pathResolved));
            }
          }
        }
      });
  }

  async startRoutes(server) {

    if(this.domainRoutes.length != 0) {
      this.domainRoutes.forEach(domainRoutes => {
        const { BASE_PATH=undefined, routes=undefined } = domainRoutes;

        if(!_.isUndefined(BASE_PATH) && (_.isArray(routes) && routes.lenght != 0)) {
          const router = server.getRouter();
          routes.forEach(route => {
            const { path, validations=undefined, handler } = route;
            const method = server.getMethod(route.method);
            if(!_.isUndefined(method)) {
              if(_.isUndefined(validations)) {
                router[method.toLowerCase()](`${path}`, handler);
              } else {
                router[method.toLowerCase()](`${path}`, validations, handler);
              }
            }
          });
    
          server.useRouter(BASE_PATH, router);
        }
      })
    }
  }

}

module.exports = new Domains();