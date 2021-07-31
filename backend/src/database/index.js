const mongoose = require('mongoose');
const mongoConfig = require('./config');

mongoose.Promise = global.Promise;

let _mongoStarted = false;
const start = async () => { 
  try {
    if(await mongoose.connect(mongoConfig.DB_URL, mongoConfig.options)) {
      _mongoStarted = true;
      console.log(' ## Database started!');
    }
  } catch(error) {
    console.log(` ## Problem to start the database [error: ${error}]`)
  }

  return _mongoStarted;
}

module.exports = {
  start,
  mongoose
};

