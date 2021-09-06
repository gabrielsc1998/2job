/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import styled from 'styled-components';

import { sizes, FlexBoxCentralize } from 'style/global';

export const ContainerLogo = styled.div`
  width: 100%;
`;

export const ContainerMain = styled.div`
  width: 60%;
  min-width: 300px;
  height: 50%;
  min-height: 300px;
  flex-direction: column;
  ${FlexBoxCentralize};
`;

export const ContainerForm = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerLoginButton = styled.div`
  margin-block: ${sizes.DEFAULT_SPACING * 3}px;
`;

export const ContainerTextsButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
