/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Initial screen
 * 
 */

import React, { useState } from 'react';

import { Button, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

import { useHistory } from 'react-router';

import { logo_2job } from 'images';
// import {  } from 'router/references';
import { ContainerInitialForms } from 'components';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import {
  useStyles,
  LabelTitle, 
  LabelSubtitle,
  ContainerLabel,
  ContainerLabel2
} from './style';

import TEXTS from './texts';

// interface InterfaceMyButton {
//   options: {
//     text: string,
//     onClick?: () => void;
//     style?: React.CSSProperties | undefined;
//   }
// };

export default function Initial() {

  const classes = useStyles();
  const history = useHistory();

  const [ctrlInputPassword, setCtrlInputPassword] = useState({
    show: false,
    Icon: Visibility
  });

  const executeControlInputPassword = () => {
    let lastCtrlInputPassword = {...ctrlInputPassword};
    lastCtrlInputPassword.show = !lastCtrlInputPassword.show;
    lastCtrlInputPassword.Icon = lastCtrlInputPassword.show ? VisibilityOff : Visibility;
    setCtrlInputPassword({...lastCtrlInputPassword});
  }

  const RenderIconPassword = () => {
    const Icon = ctrlInputPassword.Icon;
    return (
      <Icon
        htmlColor='#9B9B9B'
        style={{ cursor: 'pointer' }} 
        onClick={() => executeControlInputPassword() }
      />
    )
  }

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
          <div style={{ width: '100%' }}>
            <img src={logo_2job} style={{ width: '100%' }} alt='Logo_2JOB' />
          </div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column', width: '100%' }}>
            <TextField
              id='emailOrUsername'
              label={TEXTS.inputs.emailOrUser.label}
              fullWidth
              margin='normal'
            />
            <TextField 
              id='password'
              label={TEXTS.inputs.password.label}
              fullWidth
              margin='normal'
              type={ctrlInputPassword.show ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <RenderIconPassword />
                  </InputAdornment>
                )
              }}
            />
            <div style={{ marginBlock: 16  }}>
              <Button
                variant={'outlined'}
                disableElevation
                className={classes.button}
              >
                {TEXTS.buttons.login}
              </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
              <Button
                disableElevation
                className={classes.textButton}
              >
                Esqueceu sua senha?
              </Button>
              <Button
                disableElevation
                className={classes.textButton}
              >
                Crie uma conta!
              </Button>
            </div>
          </div>
        </ContainerLabel2>
      }
    />
  )
}