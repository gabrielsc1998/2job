/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description CreateAccount/UserType screen
 * 
 */
 
import React, { useEffect } from 'react';

import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';

import { useCreateUser } from 'providers/CreateUser';

import { DEFINITIONS } from 'domains/users';
import { ContainerInitialForms } from 'components';
import { CREATE_ACCOUNT } from 'router/references';

import {
  useStyles,
  ContainerForm,
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

export default function UserType() {

  const classes = useStyles();
  const history = useHistory();
  const createUser = useCreateUser();

  useEffect(() => {
    // createUser.setType(undefined);
  });

  const gotToInputsAndConfirmScreen = () => {
    history.push(CREATE_ACCOUNT.INPUTS_AND_CONFIRM);
  }
 
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
                onClick: (() => { createUser.setType(DEFINITIONS.DEV); gotToInputsAndConfirmScreen() } )
              }}
            />
            <MyButton 
              options={{
                text: TEXTS.buttons.company, 
                style:{ marginLeft: 8 },
                onClick: (() => { createUser.setType(DEFINITIONS.COMPANY); gotToInputsAndConfirmScreen() } )
              }}
            />
          </ContainerButtons>
        </div>
      </ContainerForm>
    </ContainerInitialForms>
  )
}