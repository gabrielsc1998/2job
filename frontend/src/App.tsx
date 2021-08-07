import React from 'react';

import Router from 'router';
import GlobalStyle from 'style/global';
import CreateUserProvider from 'providers/CreateUser';

function App() {
  return (
    <>
      <CreateUserProvider>
        <Router />
      </CreateUserProvider>
      <GlobalStyle /> 
    </>
  );
}

export default App;
