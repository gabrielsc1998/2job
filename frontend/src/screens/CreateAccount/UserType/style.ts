/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import styled from 'styled-components';

import { colors, sizes, FlexBoxCentralize } from 'style/global';

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

// <div style={{  }}>
//           <h1 style={{ fontSize: 30, color: '#5B5B5B', textAlign: 'center' }}>{TEXTS.labelLetsCreateYourAccount}</h1>
//         </div>
//         <div style={{ display: 'flex', marginBlock: 64, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
//           <h1 style={{ fontSize: 25, color: '#909090', textAlign: 'center' }}>{TEXTS.labelTellUsAboutYou}</h1>
//         </div>

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  ${FlexBoxCentralize};
`;