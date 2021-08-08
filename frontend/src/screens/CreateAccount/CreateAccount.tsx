/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description CreateAccount screen
 * 
 */
 
import React from 'react';

import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

import { LOGIN_SCREEN } from 'router/references';
import { ContainerInitialForms } from 'components';
import { useCreateUser } from 'providers/CreateUser';

import {
  useStyles,
  LabelTitle, 
  LabelSubtitle,
  ContainerLabel,
  ContainerLabel2
} from './style';

import TEXTS from './texts';

interface InterfaceMyButton {
  options: {
    text: string,
    onClick?: () => void;
    style?: React.CSSProperties | undefined;
  }
};

export default function CreateAccount() {

  const classes = useStyles();
  const createUser = useCreateUser();
  const history = useHistory();

  const gotToLoginScreen = () => {
    history.push(LOGIN_SCREEN);
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
    <ContainerInitialForms 
      left={
        <ContainerLabel>
          <LabelTitle>{TEXTS.title}</LabelTitle>
          <LabelSubtitle>
            {TEXTS.subtitle.p1}
            <br/>
            {TEXTS.subtitle.p2}
          </LabelSubtitle>
        </ContainerLabel>
      }
      right={
        <ContainerLabel2>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: 30, color: '#5B5B5B', textAlign: 'center' }}>Vamos criar sua conta!</h1>
          </div>
          <div style={{ display: 'flex', marginBlock: 64, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ fontSize: 25, color: '#909090', textAlign: 'center' }}>{TEXTS.labelTellUsAboutYou}</h1>
          </div>
          <div style={{ width: '100%' }}>
            <h2 style={{ fontSize: 20, color: '#454893', textAlign: 'center' }}>{TEXTS.labelButtons}</h2>
            <div style={{ display: 'flex', width: '100%', flexDirection: 'row', marginTop: 8 }}>
              <MyButton 
                options={{
                  text: TEXTS.buttons.dev, 
                  style:{ marginRight: 8 },
                  onClick: (() => { createUser.setType('dev'); gotToLoginScreen(); } )
                }}
              />
              <MyButton 
                options={{
                  text: TEXTS.buttons.company, 
                  style:{ marginLeft: 8 },
                  onClick: (() => { createUser.setType('company'); gotToLoginScreen(); } )
                }}
              />
            </div>
          </div>
        </ContainerLabel2>
      }
    />
  )
}