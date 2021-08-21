import config from '../config';

const dbConfig = {
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  DB_URL: config.db.url,
}

export default dbConfig;