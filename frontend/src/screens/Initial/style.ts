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
    minWidth: 90,
    color: '#F3F3F3', 
    borderRadius: 50,
    borderColor: '#454893', 
    backgroundColor: '#454893',
    '&:hover': {
      fontWeight: 'bold',
      color: '#454893',
      backgroundColor: '#F3F3F3'
    },
  }
}));

export const ContainerLabel = styled.div`
  flex: 1;
  flex-direction: column;
  ${FlexBoxCentralize}
`;

export const ContainerLabel2 = styled.div`
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