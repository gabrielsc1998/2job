/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import logo_2job from 'images/logo_2job.svg';

import { Container } from 'components';
import { ContainerRight, ContainerLeft, ContainerLogo } from './style';

export default function ContainerInitialForms(props: any) {
  return (
    <Container>     
      <ContainerLeft>
        {props.left}
      </ContainerLeft>
      <ContainerRight>
        <ContainerLogo>
          <img src={logo_2job} style={{ width: '60%' }} alt='Logo_2JOB' />
        </ContainerLogo>
        {props.right}
      </ContainerRight>
    </Container>
  )
}