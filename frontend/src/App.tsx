import React, { ReactElement } from 'react';

import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from 'styled-components';

import Router from 'router';
import theme from 'style/theme';
import GlobalStyle from 'style/global';
import CreateUserProvider from 'providers/CreateUser';

interface IPropsProviders {
  children?: ReactElement;
}

const Providers = (props: IPropsProviders) => (
  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={5}>
      <CreateUserProvider>{props.children}</CreateUserProvider>
    </SnackbarProvider>
  </ThemeProvider>
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
