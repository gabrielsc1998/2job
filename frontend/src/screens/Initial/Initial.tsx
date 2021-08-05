/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Initial screen
 * 
 */

import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Container, ContainerInitialForms } from 'components';

import TEXTS from './texts';

const useStyles = makeStyles((theme) => ({
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

export default function Initial() {

  const classes = useStyles();
  return(
    <Container>
      <ContainerInitialForms>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column',  width: '100%', padding: 16 }}>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
            <h3 style={{ fontSize: 25, color: 'white' }}>{TEXTS.title}</h3>
          </div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%',   }}>
            <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <h2 style={{ fontSize: 20, color: 'white' }}>{TEXTS.label}</h2>
            </div> 
            <div style={{ display: 'flex',width: '100%' }}> 
              <Button 
                variant={'outlined'}
                disableElevation
                className={classes.button}
                style={{ marginRight: 5 }}
              > {TEXTS.buttons.dev} </Button>
              <Button 
                variant={'outlined'}
                disableElevation
                className={classes.button}
                style={{ marginLeft: 5 }}
              > {TEXTS.buttons.company} </Button>
            </div> 
          </div>
        </div>
      </ContainerInitialForms>
    </Container>
  )
}