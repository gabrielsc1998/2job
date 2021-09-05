module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': 'off',
    'dot-notation': [0],
    'linebreak-style': 0,
    'react/prop-types': [0],
    'import/extensions': 'off',
    'no-underscore-dangle': [0],
    'no-unused-expressions': [0],
    'import/no-unresolved': 'error',
    'react/require-default-props': [0],
    'react/jsx-props-no-spreading': [0],
    'react/destructuring-assignment': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.ts', '.jsx', '.tsx'] },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': [0],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
