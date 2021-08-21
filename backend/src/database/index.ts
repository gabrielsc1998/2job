import mongoose from 'mongoose';
import mongoConfig from './config';

mongoose.Promise = global.Promise;

class MongoDB {

  private _dbStarted: boolean;

  constructor() {
    this._dbStarted = false;
  }

  connect = async () => {
    try {
      const { DB_URL, options } = mongoConfig;
      if(await mongoose.connect(DB_URL, options)) {
        this._dbStarted = true;
        console.log(' ## Database started!');
      }
      return this._dbStarted;
    } catch(error) {
      console.log(` ## Problem to connect the database [${error}]`);
      return false;
    }
  }

  getInstance = () => {
    try {
      return mongoose;
    } catch(error) {
      console.log(` ## Problem to get the mongo instance [${error}]`);
      return undefined;
    }
  }
}

export default new MongoDB();