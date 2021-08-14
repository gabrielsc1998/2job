/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import { MaterialButton } from './style';

interface ButtonProps {
  text: string;
};

export default function Button(props: ButtonProps) {
  const { text='' } = props;
  return (
    <MaterialButton
      variant={'outlined'}
      disableElevation
    >
      {text}
    </MaterialButton>
  )
}