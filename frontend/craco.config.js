/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  alias: {
    '@': path.resolve(__dirname, 'src/'),
  },
  configure: {
    moduleNameMapper: {
      '^@(.*)$': '<rootDir>/src$1',
    },
  },
};
