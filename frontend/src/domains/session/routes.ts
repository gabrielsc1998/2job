/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 * 
 */

type ObjectRoutes = {
  [key: string]: string;
  login: string;
};

const routes: ObjectRoutes = {
  login: `/session/login`
};

export default routes;