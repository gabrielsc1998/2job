/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Initial screen
 * 
 */

import React from 'react';
import { Button } from '@material-ui/core';

import { Container, ContainerInitialForms } from 'components'

import logo_2job from 'images/logo_2job.svg'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: 5, 
    color: 'white', 
    borderColor: 'white', 
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'white'
    }

  }
}));

export default function Initial() {

  const classes = useStyles();
  return(
    <Container>
      <ContainerInitialForms>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <img src={logo_2job} style={{ width: '90%' }} alt="React Logo" />
        </div>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {/* <img src={logo_2job} style={{ width: '90%' }} alt="React Logo" /> */}
        </div>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
          <Button 
            variant={'outlined'}
            disableElevation
            className={classes.button}
          > CLIQUE AQUI </Button>
          <Button 
            variant={'outlined'}
            disableElevation
            style={{ marginLeft: 5, color: 'white', borderColor: 'white', backgroundColor: 'transparent' }}
          > CLIQUE AQUI </Button>
        </div>
      </ContainerInitialForms>
    </Container>
  )
}