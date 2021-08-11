/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import React from 'react';

import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useSnackbar, VariantType, SnackbarOrigin } from 'notistack';

const CloseButton = () => {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton onClick={()=>{ closeSnackbar() }}>
      <Close htmlColor='white' />
    </IconButton>
  )
}

const vertical: SnackbarOrigin['vertical'] = 'bottom';
const horizontal: SnackbarOrigin['horizontal'] = 'right';

const optionsSnackbar = (variant: VariantType) => {
  // const options = 
  return {
    autoHideDuration: 3000,
    action: <CloseButton/>,
    key: 'bottomright',
    anchorOrigin: {
      vertical: vertical,
      horizontal: horizontal, 
    },
    variant: variant
  };
};

export default optionsSnackbar;
