/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import { CircularProgress } from '@material-ui/core';

import MaterialButton from './style';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Button(props: ButtonProps) {
  const {
    text = '',
    type = 'button',
    disabled = false,
    loading = false,
    onClick = undefined,
    style = {},
  } = props;

  return (
    <MaterialButton
      type={type}
      disabled={disabled}
      startIcon={
        loading && <CircularProgress size={16} style={{ color: 'white' }} />
      }
      variant="outlined"
      disableElevation
      onClick={onClick}
      style={style}
    >
      {text}
    </MaterialButton>
  );
}
