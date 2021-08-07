import React from 'react';

import GlobalStyle from 'style/global';
import Initial from 'screens/Initial/Initial';

import CreateUserProvider from 'providers/CreateUser';
function App() {
  return (
    <>
      <CreateUserProvider>
        <Initial />
      </CreateUserProvider>
      <GlobalStyle /> 
    </>
  );
}

export default App;
