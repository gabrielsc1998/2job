/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import styled from 'styled-components';

import { FlexBoxCentralize } from 'style/global';

import { background } from 'images';

export const ContainerRight = styled.div`
  flex: 0.6;
  width: 100%;
  flex-direction: column;
  background-color: #F3F3F3;
  ${FlexBoxCentralize}
  @media(max-width: 800px) {
    flex: 1;
  }
`;

export const ContainerLeft = styled.div`
  flex: 0.45;
  width: 100%;
  flex-direction: column;
  background-image: url(${background});
  background-position: center;
  background-size: auto 100% ;
  ${FlexBoxCentralize}
  @media(max-width: 800px) {
    display: none;
  }
`;

export const ContainerLogo = styled.div`
  flex: 1;
  display: flex;
  ${FlexBoxCentralize}
`;
