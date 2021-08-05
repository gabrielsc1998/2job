/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import logo_2job from 'images/logo_2job.svg';

import Container, { ContainerLogo } from './style';

export default function ContainerInitialForms(props: any) {
  return (
    <Container>
      <ContainerLogo>
        <img src={logo_2job} style={{ width: '90%' }} alt='Logo 2JOB' />
      </ContainerLogo>
      {props.children}
    </Container>
  )
}