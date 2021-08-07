/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description File to make available the Initial screen for the application
 * 
 */

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import routes from './routes';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes && routes.length ?
            routes.map((route, index) => {
              const { ref, component } = route;
              return (
                <Route key={index} exact path={ref} component={component} />
              )
            })
          : false
        }
      </Switch>
    </BrowserRouter>
  )
}