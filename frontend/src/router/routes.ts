/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import { Login, CreateAccount, Dashboard } from 'screens';

import { LOGIN_SCREEN, CREATE_ACCOUNT, DASHBOARD_SCREEN } from './references';

const routes = [
  {
    ref: LOGIN_SCREEN,
    component: Login,
  },
  {
    ref: CREATE_ACCOUNT.USER_TYPE,
    component: CreateAccount.UserType,
  },
  {
    ref: CREATE_ACCOUNT.INPUTS_AND_CONFIRM,
    component: CreateAccount.InputsAndConfirm,
  },
  {
    ref: DASHBOARD_SCREEN,
    component: Dashboard,
  },
];

export default routes;
export const redirectRefIfRouteNotFound = LOGIN_SCREEN;
