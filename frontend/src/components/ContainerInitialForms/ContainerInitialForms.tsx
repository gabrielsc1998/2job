/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import logo_2job from 'images/logo_2job.svg';

import { ContainerRight, ContainerLeft, ContainerLogo } from './style';

export default function ContainerInitialForms(props: any) {
  return (
    <div style={{ display: 'flex', flex: 1, width: '100%', height: '100%' }}>     
      <ContainerLeft>
        {props.left}
      </ContainerLeft>
      <ContainerRight>
        <ContainerLogo>
          <img src={logo_2job} style={{ width: '60%' }} alt='Logo_2JOB' />
        </ContainerLogo>
        {props.right}
      </ContainerRight>
    </div>
  )
}