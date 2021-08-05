/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Global style of the application
 * 
 */

import { createGlobalStyle } from 'styled-components';

export const colors = {
  BACKGROUND: '#454893'
};

export const theme = {
  backgroundColor: '#454893',
};

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  #root {
    width: 100vw;
    height: 100vh;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-size: cover;
    background-color: #454893;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  a {
    outline: none;
  }

`;