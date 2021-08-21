import 'dotenv/config';
const env = <string>process.env.NODE_ENV || 'dev';

interface ObjectConfig {
  app: {
    port: number
  },
  db: {
    url: string,
  }
}

interface Config {
  [key: string]: ObjectConfig,
  dev: ObjectConfig
}

const config: Config = {
  dev: {
    app: {
      port: Number(process.env.APP_PORT) || 3000,
    },
    db: {
      url: process.env.URL || 'mongodb://localhost/db'
    }
  },
}

export default config[env];