import React from 'react';

import { SnackbarProvider } from 'notistack';

import Router from 'router';
import GlobalStyle from 'style/global';
import CreateUserProvider from 'providers/CreateUser';

function App() {
  return (
    <>
      <SnackbarProvider maxSnack={5}>
        <CreateUserProvider>
          <Router />
        </CreateUserProvider>
      </SnackbarProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
