import 'dotenv/config';

const env = String(process.env.REACT_APP_NODE_ENV) || 'dev';

type IObjectConfig = {
  api: {
    url: string;
  };
};

interface IConfig {
  [key: string]: IObjectConfig;
  dev: IObjectConfig;
}

const config: IConfig = {
  dev: {
    api: {
      url: process.env.REACT_APP_URL || 'http://localhost:3000',
    },
  },
};

export default config[env];
