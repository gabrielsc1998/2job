const mongoose = require('mongoose');
const mongoConfig = require('./config');

mongoose.Promise = global.Promise;

class MongoDB {

  constructor() {
    this._dbStarted = false;
  }

  async connect() {
    return new Promise(async (resolve, reject) => {
      try {
        const { DB_URL, options } = mongoConfig;
        if(await mongoose.connect(DB_URL, options)) {
          this._dbStarted = true;
          console.log(' ## Database started!');
        }
        resolve(this._dbStarted);
      } catch(error) {
        console.log(` ## Problem to connect the database [${error}]`);
        reject(false);
      }
    });
  }

  getInstance() {
    try {
      return mongoose;
    } catch(error) {
      console.log(` ## Problem to get the mongo instance [${error}]`);
      return undefined;
    }
  }
}

module.exports = new MongoDB();