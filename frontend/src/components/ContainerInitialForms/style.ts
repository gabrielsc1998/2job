/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import styled from 'styled-components';

import { FlexBoxCentralize, BreakPoints } from 'style/global';

import { background } from 'images';

export const ContainerRight = styled.div`
  flex: 0.6;
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  ${FlexBoxCentralize}
  @media(max-width: ${BreakPoints.tablet}) {
    flex: 1;
  }
`;

export const ContainerLeft = styled.div`
  flex: 0.45;
  width: 100%;
  flex-direction: column;
  background-image: url(${background});
  background-position: center;
  background-size: auto 100%;
  ${FlexBoxCentralize}
  @media(max-width: ${BreakPoints.tablet}) {
    display: none;
  }
`;

export const ContainerLabel = styled.div`
  flex: 1;
  flex-direction: column;
  ${FlexBoxCentralize};
`;

export const LabelTitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  text-align: center;
`;

export const LabelSubtitle = styled.p`
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.text};
  font-size: 30px;
  text-align: center;
`;
