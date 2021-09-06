/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Login screen
 *
 */

import React, { useState } from 'react';

import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';

import { logo2job } from 'images';
import session from 'domains/session/api';
import { ILogin } from 'domains/session/models';
import { CREATE_ACCOUNT, DASHBOARD_SCREEN } from 'router/references';
import optionsSnackbar from 'components/Snackbar/Snackbar';
import { ContainerInitialForms, Inputs, Button, SvgImage } from 'components';

import {
  ContainerMain,
  ContainerForm,
  ContainerLoginButton,
  ContainerTextsButton,
  ContainerLogo,
  MaterialTextButton,
} from './style';

import TEXTS from './texts';

interface InterfaceTextButton {
  options: {
    text: string;
    onClick?: () => void;
    style?: React.CSSProperties | undefined;
  };
}

export default function Initial() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const goToScreen = (screen: string) => {
    history.push(screen);
  };

  const TextButton = (props: InterfaceTextButton) => {
    const { text = '', onClick } = props.options;
    return (
      <MaterialTextButton disableElevation onClick={onClick}>
        {text}
      </MaterialTextButton>
    );
  };

  const { register, handleSubmit /* ,formState: { errors } */, reset } =
    useForm();

  const [loading, setLoading] = useState(false);
  const login = async (data: ILogin) => {
    setLoading(true);
    if (await session.login(data)) {
      enqueueSnackbar('Login com sucesso!', {
        ...optionsSnackbar('success'),
      });
      goToScreen(DASHBOARD_SCREEN);
    } else {
      enqueueSnackbar('Não autorizado!', { ...optionsSnackbar('error') });
    }
    reset();
    setLoading(false);
  };

  return (
    <ContainerInitialForms>
      <ContainerMain>
        <ContainerLogo>
          <SvgImage src={logo2job} alt="2job logo" />
        </ContainerLogo>
        <ContainerForm>
          <form onSubmit={handleSubmit(login)}>
            <TextField
              id="emailOrUsername"
              label={TEXTS.inputs.emailOrUser.label}
              fullWidth
              margin="normal"
              {...register('emailOrUsername', { required: true })}
            />
            <Inputs.Password {...register('password', { required: true })} />
            <ContainerLoginButton>
              <Button
                text={TEXTS.buttons.login}
                type="submit"
                disabled={loading}
                loading={loading}
              />
            </ContainerLoginButton>
          </form>
          <ContainerTextsButton>
            <TextButton
              options={{
                text: TEXTS.buttons.forgotPassword,
                onClick: () => {
                  goToScreen(CREATE_ACCOUNT.USER_TYPE);
                },
              }}
            />
            <TextButton
              options={{
                text: TEXTS.buttons.createAccount,
                onClick: () => {
                  goToScreen(CREATE_ACCOUNT.USER_TYPE);
                },
              }}
            />
          </ContainerTextsButton>
        </ContainerForm>
      </ContainerMain>
    </ContainerInitialForms>
  );
}
