/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

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

export const ContainerScreen = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export const ContainerTitle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 25px; 
  color: white;
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
`;

export const ContainerLabelAndButtons = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

export const ContainerLabel = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.p`
  font-size: 20px;
  color: white;
`;