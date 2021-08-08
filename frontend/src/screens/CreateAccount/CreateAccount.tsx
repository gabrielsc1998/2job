/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description CreateAccount screen
 * 
 */
 
import React, { useState, useEffect } from 'react';

import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

// import { LOGIN_SCREEN } from 'router/references';
import { ContainerInitialForms } from 'components';
// import { useCreateUser } from 'providers/CreateUser';

import { DEFINITIONS } from 'domains/users';

import {
  useStyles,
  ContainerLabel2,
  ContainerButtons
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

export default function CreateAccount() {

  const classes = useStyles();
  const history = useHistory();

  const [createUser, setCreateUser] = useState<InterfaceCreateUser>({
    type: undefined
  });

  const setUserType = (userType: string) => {
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
  
  return(
    <ContainerInitialForms>
      {
        createUser !== undefined ? 
          <ContainerLabel2>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <h1 style={{ fontSize: 30, color: '#5B5B5B', textAlign: 'center' }}>Vamos criar sua conta!</h1>
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
                    onClick: (() => { setUserType(DEFINITIONS.DEV); gotToLoginScreen() } )
                  }}
                />
                <MyButton 
                  options={{
                    text: TEXTS.buttons.company, 
                    style:{ marginLeft: 8 },
                    onClick: (() => { setUserType(DEFINITIONS.COMPANY); gotToLoginScreen() } )
                  }}
                />
              </ContainerButtons>
            </div>
          </ContainerLabel2>
        : false
      }
    </ContainerInitialForms>
  )
}