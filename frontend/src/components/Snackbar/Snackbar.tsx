/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import React, { useEffect } from 'react';

import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useSnackbar } from 'notistack';


export default function ContainerInitialForms(props: any) {
  
  const { type=undefined, text='' } = props;

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const CloseButton = () => (
    <div>
      <IconButton onClick={()=>{ closeSnackbar() }}>
        <Close htmlColor='white' />
      </IconButton>
    </div>
  )
  
  const options = {
    autoHideDuration: 3000,
    action: <CloseButton/>
  }

  const openSuccess = () => {
    enqueueSnackbar(
      text, 
      { 
        ...options,
        key: 'bottomright',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right', 
        },
        variant: 'success'
      }
    );
  };

  useEffect(() => {
    type === 'success' && openSuccess();
  });

  return ( <div/> )
}