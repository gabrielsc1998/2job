/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import { colors, sizes, FlexBoxCentralize } from 'style/global';

export const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
    minWidth: 90,
    color: colors.SECONDARY, 
    borderRadius: 50,
    borderColor: colors.PRIMARY, 
    backgroundColor: colors.PRIMARY,
    '&:hover': {
      fontWeight: 'bold',
      color: colors.PRIMARY,
      backgroundColor: colors.SECONDARY
    },
  }
}));

export const ContainerLabel2 = styled.div`
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