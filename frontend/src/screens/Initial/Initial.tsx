/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Initial screen
 * 
 */
 
import React from 'react';

import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';

import { logo_2job } from 'images';
import { LOGIN_SCREEN } from 'router/references';
import { ContainerInitialForms } from 'components';
import { useCreateUser } from 'providers/CreateUser';

import {
  useStyles,
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

export default function Initial() {

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
      right={
        <ContainerLabel2>
          <div style={{ width: '100%' }}>
            <img src={logo_2job} style={{ width: '100%' }} alt='Logo_2JOB' />
          </div>
          <div style={{ display: 'flex', flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
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