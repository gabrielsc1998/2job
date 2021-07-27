require('dotenv/config');
const env = process.env.NODE_ENV || 'dev';

const config = {
  dev: {
    app: {
      port: process.env.APP_PORT || 3000,
    },
    db: {
      url: process.env.URL || 'mongodb://localhost/db'
    }
  },
}

module.exports = config[env];