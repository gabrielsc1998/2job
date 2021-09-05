/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Global style of the application
 *
 */

import { createGlobalStyle, css } from 'styled-components';

export const sizes = {
  DEFAULT_SPACING: 8,
};

export const BreakPoints = {
  mobile_S: '320px',
  mobile_M: '375px',
  mobile_L: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptop_L: '1440px',
};

export const FlexBoxCentralize = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
    background-color: #F3F3F3;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button, a {
    outline: none;
    cursor: pointer;
  }

`;
