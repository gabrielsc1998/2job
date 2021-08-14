/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Login screen
 * 
 */

import React from 'react';

import { useHistory } from 'react-router';
import { TextField } from '@material-ui/core';

import { logo_2job } from 'images';
import { ContainerInitialForms, Inputs, Button } from 'components';
import { CREATE_ACCOUNT } from 'router/references';

import {
  ContainerMain,
  ContainerForm,
  ContainerLoginButton,
  ContainerTextsButton,
  ContainerLogo,
  MaterialTextButton
} from './style';

import TEXTS from './texts';

interface InterfaceTextButton {
  options: {
    text: string,
    onClick?: () => void;
    style?: React.CSSProperties | undefined;
  }
};

export default function Initial() {

  const history = useHistory();

  const goToCreateAccountUserScreen = () => {
    history.push(CREATE_ACCOUNT.USER_TYPE);
  }

  const TextButton = (props: InterfaceTextButton) => {
    const { text='', onClick=(()=>{}) } = props.options;
    return (
      <MaterialTextButton
        disableElevation
        onClick={onClick}
      > {text} </MaterialTextButton>
    )
  }

  return(
    <ContainerInitialForms>
      <ContainerMain>
        <ContainerLogo>
          <img src={logo_2job} style={{ width: '100%' }} alt='Logo_2JOB' />
        </ContainerLogo>
        <ContainerForm>
          <TextField
            id='emailOrUsername'
            label={TEXTS.inputs.emailOrUser.label}
            fullWidth
            margin='normal'
          />
          <Inputs.Password />
          <ContainerLoginButton>
            <Button text={TEXTS.buttons.login}/>
          </ContainerLoginButton>
          <ContainerTextsButton>
            <TextButton
              options={{ text: TEXTS.buttons.forgotPassword, onClick: goToCreateAccountUserScreen }}
            />
            <TextButton
              options={{ text: TEXTS.buttons.createAccount, onClick: goToCreateAccountUserScreen }}
            />
          </ContainerTextsButton>
        </ContainerForm>
      </ContainerMain>
    </ContainerInitialForms>
  )
}