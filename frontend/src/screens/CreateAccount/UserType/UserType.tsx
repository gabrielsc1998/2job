/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description CreateAccount/UserType screen
 * 
 */
 
import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router';
import { Button, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { DEFINITIONS } from 'domains/users';
import { ContainerInitialForms } from 'components';
import { CREATE_ACCOUNT } from 'router/references';

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

export default function UserType() {

  const classes = useStyles();
  const history = useHistory();

  const [createUser, setCreateUser] = useState<InterfaceCreateUser>({
    type: undefined
  });

  const setUserType = (userType: string | undefined) => {
    setCreateUser({...createUser, type: userType});
  }

  const gotToInputsAndConfirmScreen = () => {
    // console.log(createUser.type)
    history.push(CREATE_ACCOUNT.INPUTS_AND_CONFIRM);
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
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ fontSize: 30, color: '#5B5B5B', textAlign: 'center' }}>{TEXTS.labelLetsCreateYourAccount}</h1>
        </div>
        <div style={{ display: 'flex', marginBlock: 64, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ fontSize: 25, color: '#909090', textAlign: 'center' }}>{TEXTS.labelTellUsAboutYou}</h1>
        </div>
        <div style={{ width: '100%' }}>
          <h2 style={{ fontSize: 20, color: '#454893', textAlign: 'center' }}>{TEXTS.labelButtons}</h2>
          <ContainerButtons>
            <MyButton 
              options={{
                text: TEXTS.buttons.dev, 
                style:{ marginRight: 8 },
                onClick: (() => { setUserType(DEFINITIONS.DEV); gotToInputsAndConfirmScreen() } )
              }}
            />
            <MyButton 
              options={{
                text: TEXTS.buttons.company, 
                style:{ marginLeft: 8 },
                onClick: (() => { setUserType(DEFINITIONS.COMPANY); gotToInputsAndConfirmScreen() } )
              }}
            />
          </ContainerButtons>
        </div>
      </ContainerForm>
    </ContainerInitialForms>
  )
}