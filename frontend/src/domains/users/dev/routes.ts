/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 * 
 */

const CONTEXT = '/dev';

type ObjectRoutes = {
  [key: string]: string;
};

const routes: ObjectRoutes = {
  create: `/create`
};

Object.keys(routes).forEach((key: string) => {
  routes[key] = `${CONTEXT}${key}`
});

export default routes;