/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import { FlexBoxCentralize } from 'style/global';

export const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
    color: 'white', 
    borderColor: 'white', 
    backgroundColor: 'transparent',
    '&:hover': {
      fontWeight: 'bold',
      color: '#454893',
      backgroundColor: 'white'
    },
  }
}));

export const ContainerLabel = styled.div`
  flex: 1;
  flex-direction: column;
  ${FlexBoxCentralize}
`;

export const LabelTitle = styled.p`
  color: #F3F3F3;
  font-size: 40px;
  text-align: center;
`;

export const LabelSubtitle = styled.p`
  opacity: 0.5;
  color: #F3F3F3;
  font-size: 30px;
  text-align: center;
`;