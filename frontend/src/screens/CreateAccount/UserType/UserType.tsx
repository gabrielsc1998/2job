/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description CreateAccount/UserType screen
 *
 */

import React, { useEffect } from 'react';

import { useHistory } from 'react-router';

import { useCreateUser } from 'providers/CreateUser';

import { DEFINITIONS } from 'domains/users';
import { ContainerInitialForms, Button, GoBack } from 'components';
import { CREATE_ACCOUNT } from 'router/references';

import {
  ContainerForm,
  ContainerTitle,
  ContainerButtons,
  ContainerButtonsAndLabel,
} from './style';

import TEXTS from './texts';

export default function UserType() {
  const history = useHistory();
  const createUser = useCreateUser();

  useEffect(() => {
    // createUser.setType(undefined);
  });

  // const goToLoginScreen = () => {
  //   history.push(LOGIN_SCREEN);
  // }

  const goToInputsAndConfirmaScreen = () => {
    history.push(CREATE_ACCOUNT.INPUTS_AND_CONFIRM);
  };
  return (
    <ContainerInitialForms>
      <ContainerForm>
        <GoBack text="Voltar para o LOGIN" />
        <ContainerTitle>
          <h1 style={{ fontSize: 30, color: '#5B5B5B', textAlign: 'center' }}>
            {TEXTS.labelLetsCreateYourAccount}
          </h1>
        </ContainerTitle>
        <ContainerTitle style={{ marginBlock: 64 }}>
          <h1 style={{ fontSize: 25, color: '#909090', textAlign: 'center' }}>
            {TEXTS.labelTellUsAboutYou}
          </h1>
        </ContainerTitle>
        <ContainerButtonsAndLabel>
          <h2 style={{ fontSize: 20, color: '#454893', textAlign: 'center' }}>
            {TEXTS.labelButtons}
          </h2>
          <ContainerButtons>
            <Button
              text={TEXTS.buttons.dev}
              style={{ marginRight: 8, borderRadius: 100 }}
              onClick={() => {
                createUser.setType(DEFINITIONS.DEV);
                goToInputsAndConfirmaScreen();
              }}
            />
            <Button
              text={TEXTS.buttons.company}
              style={{ marginLeft: 8, borderRadius: 100 }}
              onClick={() => {
                createUser.setType(DEFINITIONS.COMPANY);
                goToInputsAndConfirmaScreen();
              }}
            />
          </ContainerButtons>
        </ContainerButtonsAndLabel>
      </ContainerForm>
    </ContainerInitialForms>
  );
}
