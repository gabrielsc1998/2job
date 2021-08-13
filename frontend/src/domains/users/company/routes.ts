/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 * 
 */

const CONTEXT = '/company';

interface InterfaceRoutes {
  create: string;
};

const routes = {
  create: `${CONTEXT}/create`
};

// Object.keys(routes).forEach((key: string) => {
//   routes[key] = `${CONTEXT}${key}`
// });

export { routes };