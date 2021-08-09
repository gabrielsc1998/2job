/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description CreateAccount/InputsAndConfirm screen
 * 
 */
 
import React, { useState } from 'react';

import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { Button, TextField } from '@material-ui/core';

import { CircularProgress } from '@material-ui/core';

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
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const goToSetUserTypeScreen = () => {
    history.push(CREATE_ACCOUNT.USER_TYPE);
  }

  const testSubmit = async (data: any) => {
    // event.preventDefault();
    setLoading(true);
    console.log(data);
    setTimeout(async () => {
      await DevAPI.create(data);
      setLoading(false);
    }, 5000)
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
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 32 }}>
          <h1 style={{ fontSize: 30, color: '#5B5B5B', textAlign: 'center' }}>
            {TEXTS.label}
          </h1>
        </div>
        <div style={{ width: '100%' }}>
          <form onSubmit={handleSubmit(testSubmit)}>
            <TextField
              label={createUser.getType() === DEFINITIONS.DEV ? 'Nome completo' : 'Nome da empresa'}
              fullWidth
              margin='normal'
              error={errors.name}
              helperText={errors.name && `Não esqueça de inserir corretamente ${createUser.getType() === DEFINITIONS.DEV ? 'seu nome completo' : 'o nome da empresa'}`}
              {...register('name', { required: true })}
            />
            <TextField
              label={'E-mail'}
              fullWidth
              margin='normal'
              type='email'
              error={errors.email}
              helperText={errors.email && 'Não esqueça de inserir corretamente seu e-mail'}
              {...register('email', { required: true })}
            />
            <Inputs.Password {...register('password', { required: true })} error={errors.password} />
            <ContainerLoginButton>
              <Button
                type='submit'
                variant={'outlined'}
                disableElevation
                className={classes.button}
                disabled={loading}
                startIcon={loading && <CircularProgress size={16} style={{ color: 'white' }} /> }
              >
                {TEXTS.button.createAccount}
              </Button>
            </ContainerLoginButton>
          </form>
        </div>
      </ContainerForm>
    </ContainerInitialForms>
  )
}