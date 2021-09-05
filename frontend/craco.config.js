import { resolve } from 'path';

export const webpack = {
  alias: {
    '@': resolve(__dirname, 'src/'),
  },
};
export const jest = {
  configure: {
    moduleNameMapper: {
      '^@(.*)$': '<rootDir>/src$1',
    },
  },
};
