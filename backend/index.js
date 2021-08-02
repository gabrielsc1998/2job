const db = require('./src/database');
const server = require('./src/server');
const domains = require('./src/domains');

(async function () {
  if(await db.connect()) {
    if(await server.start()) {
      domains.startRoutes(server);
    }
  }
})();