/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import { useHistory } from 'react-router';
import ContainerGoBack from './style';

import Button from '../Button';

interface GoBackProps {
  text?: string;
}

export default function GoBack(props: GoBackProps) {
  const { text = 'Voltar' } = props;

  const history = useHistory();
  return (
    <ContainerGoBack>
      <Button
        text={text}
        style={{ textTransform: 'none' }}
        onClick={() => history.goBack()}
      />
    </ContainerGoBack>
  );
}
