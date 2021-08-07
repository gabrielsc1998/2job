/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 * 
 */

import {
  Initial,
  Login
} from 'screens';

import {
  INITIAL_SCREEN,
  LOGIN_SCREEN
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
];

export default routes;