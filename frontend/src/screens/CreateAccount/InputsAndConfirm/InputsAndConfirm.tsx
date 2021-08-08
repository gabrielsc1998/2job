/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description CreateAccount/InputsAndConfirm screen
 * 
 */
 
import React from 'react';

import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { Button, TextField } from '@material-ui/core';

import { DEFINITIONS } from 'domains/users';
import { ContainerInitialForms, Inputs } from 'components';
import { CREATE_ACCOUNT } from 'router/references';
import { useCreateUser } from 'providers/CreateUser';

import {
  useStyles,
  ContainerForm,
  ContainerLoginButton
} from './style';

import TEXTS from './texts';
import DevAPI from 'domains/users/dev/api'

export default function InputsAndConfirm() {

  const classes = useStyles();
  const history = useHistory();
  const createUser = useCreateUser();

  const { register, handleSubmit } = useForm();
  
  const goToSetUserTypeScreen = () => {
    history.push(CREATE_ACCOUNT.USER_TYPE);
  }

  const testSubmit = async (data: any) => {
    // event.preventDefault();
    console.log(data)
    await DevAPI.create(data);

  }

  return(
    <ContainerInitialForms>
      <ContainerForm>
        <div style={{ position: 'absolute', top: 10, right: 10, textTransform: 'none', flexDirection: 'column', display: 'flex'  }}>
          <Button
            className={classes.buttonChangeUserType} 
            onClick={() => { goToSetUserTypeScreen() } }
          > 
            Você é {createUser.getType() === DEFINITIONS.DEV ? 'Dev' : 'Empresa'}. <br/> ALTERAR? 
          </Button> 
        </div>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ fontSize: 30, color: '#5B5B5B', textAlign: 'center' }}>Informe-nos seu e-mail e sua senha</h1>
        </div>
        <div style={{ width: '100%' }}>
          <form onSubmit={handleSubmit(testSubmit)}>
            <TextField
              label={'E-mail'}
              fullWidth
              margin='normal'
              {...register('email')}
            />
            <Inputs.Password {...register('password')} />
            <ContainerLoginButton>
              <Button
                type='submit'
                variant={'outlined'}
                disableElevation
                className={classes.button}
                >
                {'CRIAR CONTA'}
              </Button>
            </ContainerLoginButton>
          </form>
        </div>
      </ContainerForm>
    </ContainerInitialForms>
  )
}