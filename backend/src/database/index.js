const mongoose = require('mongoose');
const mongoConfig = require('./config');

mongoose.Promise = global.Promise;

class MongoDB {

  constructor() {
    this.dbStarted = false;
  }

  async connect() {
    try {
      const { DB_URL, options } = mongoConfig;
      if(await mongoose.connect(DB_URL, options)) {
        this.dbStarted = true;
        console.log(' ## Database started!');
      }
      return this.dbStarted;
    } catch(error) {
      console.log(` ## Problem to connect the database [${error}]`);
      return false;
    }
  }

  getInstance() {
    if(this.dbStarted) {
      return mongoose;
    }
    return undefined;
  }
}

module.exports = new MongoDB();