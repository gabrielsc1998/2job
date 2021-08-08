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
    minWidth: 100,
    color: colors.SECONDARY, 
    borderColor: colors.PRIMARY, 
    backgroundColor: colors.PRIMARY,
    '&:hover': {
      fontWeight: 'bold',
      color: colors.PRIMARY,
      backgroundColor: colors.SECONDARY
    },
  },
  textButton: {
    color: colors.PRIMARY, 
    textTransform: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      fontWeight: 'bold',
      textDecoration: 'underline',
      backgroundColor: 'transparent'
    },
  }
}));

export const ContainerLabel = styled.div`
  flex: 1;
  flex-direction: column;
  ${FlexBoxCentralize};
`;

export const ContainerLabel2 = styled.div`
  width: 60%;
  min-width: 300px;
  height: 50%;
  min-height: 300px;
  flex-direction: column;
  ${FlexBoxCentralize};
`;

export const LabelTitle = styled.p`
  color: ${colors.SECONDARY};
  font-size: 40px;
  text-align: center;
`;

export const LabelSubtitle = styled.p`
  opacity: 0.5;
  color: ${colors.SECONDARY};
  font-size: 30px;
  text-align: center;
`;

export const ContainerLoginButton = styled.div`
  margin-block: ${sizes.DEFAULT_SPACING*3}px;
`;

export const ContainerTextsButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const ContainerForm = styled.div`
  flex: 1; 
  width: 100%;
  display: flex; 
  flex-direction: column;
`;