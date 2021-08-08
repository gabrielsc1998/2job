/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Initial screen
 * 
 */

import React, { useState } from 'react';

import { Button, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

import { useHistory } from 'react-router';

import { logo_2job } from 'images';

import { Visibility, VisibilityOff } from '@material-ui/icons';

import { ContainerInitialForms } from 'components';

import { CREATE_ACCOUNT_SCREEN } from 'router/references';

import {
  useStyles,
  ContainerLabel2,
  ContainerLoginButton,
  ContainerTextsButton,
  ContainerForm
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

  const classes = useStyles();
  const history = useHistory();

  const goToCreateAccountScreen = () => {
    history.push(CREATE_ACCOUNT_SCREEN);
  }

  const [ctrlInputPassword, setCtrlInputPassword] = useState({
    show: false,
    Icon: Visibility
  });

  const executeControlInputPassword = () => {
    let lastCtrlInputPassword = {...ctrlInputPassword};
    lastCtrlInputPassword.show = !lastCtrlInputPassword.show;
    lastCtrlInputPassword.Icon = lastCtrlInputPassword.show ? VisibilityOff : Visibility;
    setCtrlInputPassword({...lastCtrlInputPassword});
  }

  const RenderIconPassword = () => {
    const Icon = ctrlInputPassword.Icon;
    return (
      <Icon
        htmlColor='#9B9B9B'
        style={{ cursor: 'pointer' }} 
        onClick={() => executeControlInputPassword() }
      />
    )
  }

  const TextButton = (props: InterfaceTextButton) => {
    const { text='', onClick=(()=>{}) } = props.options;
    return (
      <Button
        disableElevation
        onClick={onClick}
        className={classes.textButton}
      > {text} </Button>
    )
  }

  return(
    <ContainerInitialForms>
      <ContainerLabel2>
        <div style={{ width: '100%' }}>
          <img src={logo_2job} style={{ width: '100%' }} alt='Logo_2JOB' />
        </div>
        <ContainerForm>
          <TextField
            id='emailOrUsername'
            label={TEXTS.inputs.emailOrUser.label}
            fullWidth
            margin='normal'
          />
          <TextField 
            id='password'
            label={TEXTS.inputs.password.label}
            fullWidth
            margin='normal'
            type={ctrlInputPassword.show ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <RenderIconPassword />
                </InputAdornment>
              )
            }}
          />
          <ContainerLoginButton>
            <Button
              variant={'outlined'}
              disableElevation
              className={classes.button}
            >
              {TEXTS.buttons.login}
            </Button>
          </ContainerLoginButton>
          <ContainerTextsButton>
            <TextButton
              options={{ text: TEXTS.buttons.forgotPassword, onClick: goToCreateAccountScreen }}
            />
            <TextButton
              options={{ text: TEXTS.buttons.createAccount, onClick: goToCreateAccountScreen }}
            />
          </ContainerTextsButton>
        </ContainerForm>
      </ContainerLabel2>
    </ContainerInitialForms>
  )
}