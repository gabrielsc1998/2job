/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import styled from 'styled-components';

import { sizes, FlexBoxCentralize } from 'style/global';

export const ContainerButtonGoToLogin = styled.div`
  display: flex;
  position: absolute;
  text-transform: none;
  flex-direction: column;
  top: 10px; right: 10px;
`;

export const ContainerForm = styled.div`
  width: 60%;
  min-width: 300px;
  height: 50%;
  min-height: 300px;
  flex-direction: column;
  ${FlexBoxCentralize};
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row; 
  margin-top: ${sizes.DEFAULT_SPACING}px;
`;

export const ContainerLoginButton = styled.div`
  margin-block: ${sizes.DEFAULT_SPACING*3}px;
`;

export const ContainerButtonsAndLabel = styled.div`
  width: 100%;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  ${FlexBoxCentralize};
`;