/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Login screen
 * 
 */

import React, { useState } from 'react';

import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";
import { TextField } from '@material-ui/core';

import { useSnackbar } from 'notistack';
import optionsSnackbar from 'components/Snackbar/Snackbar';

import { logo_2job } from 'images';
import { ContainerInitialForms, Inputs, Button } from 'components';
import { CREATE_ACCOUNT } from 'router/references';
import session from 'domains/session/api';

import {
  ContainerMain,
  ContainerForm,
  ContainerLoginButton,
  ContainerTextsButton,
  ContainerLogo,
  MaterialTextButton
} from './style';

import TEXTS from './texts';

interface InterfaceTextButton {
  options: {
    text: string,
    onClick?: () => void;
    style?: React.CSSProperties | undefined;
  }
};

export default function Initial() {

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const goToCreateAccountUserScreen = () => {
    history.push(CREATE_ACCOUNT.USER_TYPE);
  }

  const TextButton = (props: InterfaceTextButton) => {
    const { text='', onClick=(()=>{}) } = props.options;
    return (
      <MaterialTextButton
        disableElevation
        onClick={onClick}
      > {text} </MaterialTextButton>
    )
  }
  
  const { register, handleSubmit /*,formState: { errors }*/ } = useForm();

  const [loading, setLoading] = useState(false);
  const login = async (data: any) => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      if(await session.login(data)) {
        enqueueSnackbar('Login com sucesso!', { ...optionsSnackbar('success') });
      } else {
        enqueueSnackbar('Erro no login!', { ...optionsSnackbar('error') });
      }
    }, 1)
  }

  return(
    <ContainerInitialForms>
      <ContainerMain>
        <ContainerLogo>
          <img src={logo_2job} style={{ width: '100%' }} alt='Logo_2JOB' />
        </ContainerLogo>
        <ContainerForm>
          <form onSubmit={handleSubmit(login)}>
            <TextField
              id='emailOrUsername'
              label={TEXTS.inputs.emailOrUser.label}
              fullWidth
              margin='normal'
              {...register('emailOrUsername', { required: true })}
            />
            <Inputs.Password {...register('password', { required: true })}/>
            <ContainerLoginButton>
              <Button 
                text={TEXTS.buttons.login}
                type='submit'
                disabled={loading}
                loading={loading}
              />
            </ContainerLoginButton>
          </form>
          <ContainerTextsButton>
            <TextButton
              options={{ text: TEXTS.buttons.forgotPassword, onClick: goToCreateAccountUserScreen }}
            />
            <TextButton
              options={{ text: TEXTS.buttons.createAccount, onClick: goToCreateAccountUserScreen }}
            />
          </ContainerTextsButton>
        </ContainerForm>
      </ContainerMain>
    </ContainerInitialForms>
  )
}