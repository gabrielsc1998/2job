/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Login screen
 * 
 */

import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import TEXTS from './texts';
import { IconStyle } from './style';

export default function Password(props: any) {

  const { error=false } = props;

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
        htmlColor={IconStyle.color}
        style={IconStyle.style} 
        onClick={() => executeControlInputPassword() }
      />
    )
  }

  return(
    <TextField
      {...props}
      label={TEXTS.label}
      fullWidth
      margin='normal'
      type={ctrlInputPassword.show ? 'text' : 'password'}
      error={error}
      helperText={error ? TEXTS.helper : ' '}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <RenderIconPassword />
          </InputAdornment>
        )
      }}
    />
  )
}