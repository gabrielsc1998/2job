/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description CreateAccount/InputsAndConfirm screen
 * 
 */
 
import React, { useState, useEffect } from 'react';

import { Button, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from '@material-ui/icons';
// import { useHistory } from 'react-router';

// import { LOGIN_SCREEN } from 'router/references';
import { ContainerInitialForms } from 'components';
// import { useCreateUser } from 'providers/CreateUser';

import { DEFINITIONS } from 'domains/users';

import {
  useStyles,
  ContainerForm,
  ContainerButtons,
  ContainerLoginButton
} from './style';

import TEXTS from './texts';

interface InterfaceMyButton {
  options: {
    text: string,
    onClick?: () => void;
    style?: React.CSSProperties | undefined;
  }
};

interface InterfaceCreateUser {
  type?: string;
};

export default function InputsAndConfirm() {

  const classes = useStyles();
  // const history = useHistory();

  const [createUser, setCreateUser] = useState<InterfaceCreateUser>({
    type: undefined
  });

  const setUserType = (userType: string | undefined) => {
    setCreateUser({...createUser, type: userType});
  }

  const gotToLoginScreen = () => {
    // console.log(createUser.type)
    // history.push(LOGIN_SCREEN);
  }
  
  useEffect(() => {
    console.log(createUser.type)
  }, [createUser])

  const MyButton = (props: InterfaceMyButton) => {
    const { text='', onClick=(()=>{}), style=undefined } = props.options;
    return (
      <Button 
        variant={'outlined'}
        disableElevation
        className={classes.button}
        style={style}
        onClick={onClick}
      > {text} </Button>
    );
  };
  
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

  return(
    <ContainerInitialForms>
      <ContainerForm>
        <div style={{ position: 'absolute', top: 10, right: 10, textTransform: 'none', flexDirection: 'column', display: 'flex'  }}>
          {/* <p style={{ textAlign: 'center' }}> Você é {createUser.type === DEFINITIONS.DEV ? 'Dev' : 'Empresa'}. </p> */}
          <Button
            className={classes.buttonChangeUserType} 
            onClick={() => setUserType(undefined) }
          > 
            Você é {createUser.type === DEFINITIONS.DEV ? 'Dev' : 'Empresa'}. <br/> ALTERAR? 
          </Button> 
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ fontSize: 30, color: '#5B5B5B', textAlign: 'center' }}>Informe-nos seu e-mail e sua senha</h1>
        </div>
        <div style={{ width: '100%' }}>
          <TextField
            id='emailOrUsername'
            label={'E-mail'}
            fullWidth
            margin='normal'
          />
          <TextField 
            id='password'
            label={'Senha'}
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
              {'CRIAR CONTA'}
            </Button>
          </ContainerLoginButton>
        </div>
      </ContainerForm>
    </ContainerInitialForms>
  )
}