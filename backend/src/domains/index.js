const fs = require('fs');
const path = require('path');
 
class Domains {

  constructor() {
    this.domainRoutes = [];
    
    // Busca em cada domínio o arquivo routes e importa as rotas, inserindo no array 'domainRoutes'
    fs  
      .readdirSync(__dirname)
      .sort((a, b) => fs.statSync(`${__dirname}/${a}`).mtime.getTime() - fs.statSync(`${__dirname}/${b}`).mtime.getTime())
      .forEach(subDir => {
        if(subDir.indexOf('.js') === -1) {
          const filesAndSubDir = fs.readdirSync(path.resolve(`${__dirname}/${subDir}`));
          if(filesAndSubDir.length != 0) {
            const routesDir = filesAndSubDir.filter(subDir => subDir === 'routes')
            if(routesDir.length != 0) {
              const pathResolved = path.resolve(`${__dirname}/${subDir}/routes`, 'index.js');
              this.domainRoutes.push(require(pathResolved));
            }
          }
        }
      });
  }

  async startRoutes(server) {

    if(this.domainRoutes.length != 0) {
      this.domainRoutes.forEach(domainRoutes => {
        const { BASE_PATH, routes } = domainRoutes;
        console.log(domainRoutes)
        if(routes && routes.lenght != 0) {
          const router = server.getRouter();
          routes.forEach(route => {
            
            const { method, path, validations=undefined, handler } = route;
    
            if(method === 'GET') {
              if(validations != undefined) {
                router.get(`${path}`, validations, handler);
              } else {
                router.get(`${path}`, handler);
              }
            }
            else if(method === 'POST') {
              if(validations != undefined) {
                router.post(`${path}`, validations, handler);
              } else {
                router.post(`${path}`, handler);
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