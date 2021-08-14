/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 * 
 */

const CONTEXT = '/session';

type ObjectRoutes = {
  [key: string]: string;
  login: string;
};

const routes: ObjectRoutes = {
  login: `/login`
};

Object.keys(routes).forEach((key: string) => {
  routes[key] = `${CONTEXT}${routes[key]}`;
});


export default routes;