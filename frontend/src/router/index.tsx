/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description File to make available the Initial screen for the application
 * 
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';

export default function Router() {
  return (
    <Switch>
      {
        routes && routes.length ?
          routes.map(route => {
            return (
              <Route path={route.ref} component={route.component} />
            )
          })
        : false
      }
    </Switch>
  )
}