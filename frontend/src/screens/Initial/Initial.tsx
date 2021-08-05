/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Initial screen
 * 
 */

import React from 'react';

import { Container, ContainerInitialForms } from 'components'

import logo_2job from 'images/logo_2job.svg'
export default function Initial() {
  return(
    <Container>
      <ContainerInitialForms>
        <img src={logo_2job} style={{ width: '90%' }} alt="React Logo" />
      </ContainerInitialForms>
    </Container>
  )
}