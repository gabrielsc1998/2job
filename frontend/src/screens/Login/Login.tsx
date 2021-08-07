/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Initial screen
 * 
 */

import React from 'react';

import { Button, Input, InputLabel } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { IconButton } from '@material-ui/core';

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

import { TextField } from '@material-ui/core';
export default function Initial() {

  const classes = useStyles();
  const history = useHistory();

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
              label='E-mail ou usuário'
              fullWidth
            />
            <TextField 
              label='Senha'
              fullWidth
              type='password'
              InputProps={{
                endAdornment: (
                  // <InputAdornment position="end">
                  //   <AccountCircle />
                  // </InputAdornment>
                  <IconButton>
                    <Visibility />
                  </IconButton>
                ),
              }}
            />
            {/* <InputLabel htmlFor="input-pass">Senha</InputLabel>
            <Input
              id='input-pass'
              type='password'
              fullWidth
              // id="standard-adornment-password"
              // type={values.showPassword ? 'text' : 'password'}
              // value={values.password}
              // onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    style={{ backgroundColor: 'red' }}
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                  >
                    {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                  {/* </IconButton> */}
                {/* </InputAdornment> */}
              {/* } */}
            {/* /> */}
          </div>
        </ContainerLabel2>
      }
    />
  )
}