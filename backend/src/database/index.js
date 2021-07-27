const mongoose = require('mongoose');
const mongoConfig = require('./config');

mongoose.Promise = global.Promise;

const start = async () => { 
  try {
    if(await mongoose.connect(mongoConfig.DB_URL, mongoConfig.options)) {
      console.log(' ## Database started!');
    }
  } catch(error) {
    console.log(` ## Problem to start the database [error: ${error}]`)
  }
}

module.exports = {
  mongoose,
  start
}
