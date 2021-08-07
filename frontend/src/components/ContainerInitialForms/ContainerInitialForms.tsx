/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import { Container } from 'components';
import { ContainerRight, ContainerLeft } from './style';

export default function ContainerInitialForms(props: any) {
  return (
    <Container>     
      <ContainerLeft>
        {props.left}
      </ContainerLeft>
      <ContainerRight>
        {props.right}
      </ContainerRight>
    </Container>
  )
}