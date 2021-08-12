/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { colors, FlexBoxCentralize } from 'style/global';

export const MaterialButton = styled(Button)`
  width: 100%;
  min-width: 90px;
  color: ${colors.SECONDARY};
  border-radius: 50px;
  border-color: ${colors.PRIMARY};
  background-color: ${colors.PRIMARY};
  &:hover {
    font-weight: bold;
    & .label {
      color: ${colors.PRIMARY};
    }
    background-color: ${colors.SECONDARY}
  }
  ${FlexBoxCentralize};
`;

export const ContainerLabel = styled.div`
  width: 60%;
  min-width: 300px;
  height: 50%;
  min-height: 300px;
  flex-direction: column;
  ${FlexBoxCentralize};
`;