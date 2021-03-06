/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description CreateAccount/InputsAndConfirm screen
 *
 */

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { TextField } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import { DEFINITIONS } from 'domains/users';
import { LOGIN_SCREEN } from 'router/references';
import { useCreateUser } from 'providers/CreateUser';
import optionsSnackbar from 'components/Snackbar/Snackbar';
import { ContainerInitialForms, Inputs, Button, GoBack } from 'components';

import DevAPI from 'domains/users/dev/api';
import CompanyAPI from 'domains/users/company/api';

import TEXTS from './texts';
import { ContainerForm, ContainerLoginButton, ContainerTitle } from './style';

export default function InputsAndConfirm() {
  const history = useHistory();
  const createUser = useCreateUser();
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const goToSetUserTypeScreen = () => {
  //   history.push(CREATE_ACCOUNT.USER_TYPE);
  // }

  const goToLoginScreen = () => {
    history.push(LOGIN_SCREEN);
  };

  const testSubmit = async (data: any) => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      const API =
        createUser.getType() === DEFINITIONS.DEV ? DevAPI : CompanyAPI;
      if (await API.create(data)) {
        enqueueSnackbar('Conta criada com sucesso!', {
          ...optionsSnackbar('success'),
        });
        setTimeout(() => goToLoginScreen(), 150);
      } else {
        enqueueSnackbar('Erro ao criar a conta!', {
          ...optionsSnackbar('error'),
        });
      }
    }, 1);
  };

  const RenderHelperText = (type: 'name' | 'email'): string => {
    const helperText = {
      name: `Não esqueça de inserir corretamente ${
        createUser.getType() === DEFINITIONS.DEV
          ? 'seu nome completo'
          : 'o nome da empresa'
      }`,
      email: 'Não esqueça de inserir corretamente seu e-mail',
    };
    return errors[type] ? helperText[type] : ' ';
  };

  return (
    <ContainerInitialForms>
      <ContainerForm>
        <GoBack
          text={`Você é ${
            createUser.getType() === DEFINITIONS.DEV ? 'Dev' : 'Empresa'
          }. ALTERAR?`}
        />
        <ContainerTitle>
          <h1 style={{ fontSize: 30, color: '#5B5B5B', textAlign: 'center' }}>
            {TEXTS.label}
          </h1>
        </ContainerTitle>
        <div style={{ width: '100%' }}>
          <form onSubmit={handleSubmit(testSubmit)}>
            <TextField
              label={
                createUser.getType() === DEFINITIONS.DEV
                  ? 'Nome completo'
                  : 'Nome da empresa'
              }
              fullWidth
              margin="normal"
              error={errors.name}
              helperText={RenderHelperText('name')}
              {...register('name', { required: true })}
            />
            <TextField
              label="E-mail"
              fullWidth
              margin="normal"
              type="email"
              error={errors.email}
              helperText={RenderHelperText('email')}
              {...register('email', { required: true })}
            />
            <Inputs.Password
              {...register('password', { required: true })}
              error={errors.password}
            />
            <ContainerLoginButton>
              <Button
                type="submit"
                disabled={loading}
                loading={loading}
                text={TEXTS.button.createAccount}
              />
            </ContainerLoginButton>
          </form>
        </div>
      </ContainerForm>
    </ContainerInitialForms>
  );
}
