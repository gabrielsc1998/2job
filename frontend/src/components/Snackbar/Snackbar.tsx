/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import React from 'react';

import { Close } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import {
  useSnackbar,
  VariantType,
  SnackbarOrigin,
  SnackbarKey,
} from 'notistack';

import IconStyle from './style';

const CloseButton = ({ index = undefined }: { index?: SnackbarKey }) => {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton
      onClick={() => {
        closeSnackbar(index);
      }}
    >
      <Close htmlColor={IconStyle.htmlColor} />
    </IconButton>
  );
};

const vertical: SnackbarOrigin['vertical'] = 'bottom';
const horizontal: SnackbarOrigin['horizontal'] = 'right';

const generateRandomKey = (): string => {
  return Math.floor(new Date().valueOf() * Math.random()).toString(36);
};

const optionsSnackbar = (variant: VariantType) => {
  const snackbarKey = generateRandomKey();
  return {
    autoHideDuration: 3000,
    action: <CloseButton index={snackbarKey} />,
    key: snackbarKey,
    anchorOrigin: {
      vertical,
      horizontal,
    },
    variant,
  };
};

export default optionsSnackbar;
