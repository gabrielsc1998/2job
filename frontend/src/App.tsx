import React, { ReactElement } from 'react';

import { SnackbarProvider } from 'notistack';

import Router from 'router';
import GlobalStyle from 'style/global';
import CreateUserProvider from 'providers/CreateUser';

interface IPropsProviders {
  children?: ReactElement;
}

const Providers = (props: IPropsProviders) => (
  <SnackbarProvider maxSnack={5}>
    <CreateUserProvider>{props.children}</CreateUserProvider>
  </SnackbarProvider>
);

const App = () => (
  <>
    <GlobalStyle />
    <Providers>
      <Router />
    </Providers>
  </>
);

export default App;
