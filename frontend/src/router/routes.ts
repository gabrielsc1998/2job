/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 * 
 */

import {
  Initial,
  Login,
  CreateAccount
} from 'screens';

import {
  INITIAL_SCREEN,
  LOGIN_SCREEN, 
  CREATE_ACCOUNT_SCREEN
} from './references';

const routes = [
  {
    ref: INITIAL_SCREEN,
    component: Initial
  },
  {
    ref: LOGIN_SCREEN,
    component: Login
  },
  {
    ref: CREATE_ACCOUNT_SCREEN,
    component: CreateAccount
  },
];

export default routes;