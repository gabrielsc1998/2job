/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import { TObjectRoutes } from 'domains/models';

const CONTEXT = '/session';

const routes: TObjectRoutes = {
  login: `/login`,
};

Object.keys(routes).forEach((key: string) => {
  routes[key] = `${CONTEXT}${routes[key]}`;
});

export default routes;
