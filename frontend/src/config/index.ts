import 'dotenv/config';

const env = String(process.env.REACT_APP_NODE_ENV) || 'dev';

interface ObjectConfig {
  api: {
    url: string;
  };
}

interface Config {
  [key: string]: ObjectConfig;
  dev: ObjectConfig;
}

const config: Config = {
  dev: {
    api: {
      url: process.env.REACT_APP_URL || 'http://localhost:3000',
    },
  },
};

export default config[env];
