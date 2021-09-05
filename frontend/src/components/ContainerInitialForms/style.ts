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
  width: 100%;
  ${FlexBoxCentralize};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerLeft = styled.div`
  width: 100%;
  ${FlexBoxCentralize};
  flex-direction: column;
  background-size: auto 100%;
  background-position: center;
  background-image: url(${background});
  @media (max-width: ${BreakPoints.tablet}) {
    display: none;
  }
  position: relative;
`;

export const ContainerImageMask = styled.div`
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${({ theme }) => theme.colors.primary};
`;

export const ContainerLabel = styled.div`
  z-index: 1;
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
