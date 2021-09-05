/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description File to make available the router for the application
 *
 */

import React from 'react';

import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import routes, { redirectRefIfRouteNotFound } from './routes';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes &&
          routes.length &&
          routes.map((route) => {
            const { ref, component } = route;
            return <Route key={ref} exact path={ref} component={component} />;
          })}
        <Redirect to={redirectRefIfRouteNotFound} />
        <Route
          exact
          path="/teste"
          // component={routes[3].component}
          render={() => {
            return true ? (
              <Redirect to="/" />
            ) : (
              <Redirect to="/createAccount/inputsAndConfirm" />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}
