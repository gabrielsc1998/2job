const config = require('../../config');

module.exports = {
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  DB_URL: config.db.url,
}