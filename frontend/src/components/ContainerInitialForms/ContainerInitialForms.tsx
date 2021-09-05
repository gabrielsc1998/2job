/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import { TChildren } from 'types';

import Container from '../Container';

import {
  ContainerLeft,
  ContainerRight,
  ContainerLabel,
  LabelTitle,
  LabelSubtitle,
  ContainerImageMask,
} from './style';

import TEXTS from './texts';

interface IPropsContainerInitialForms {
  children?: TChildren;
}

export default function ContainerInitialForms(
  props: IPropsContainerInitialForms
) {
  return (
    <Container>
      <ContainerLeft>
        <ContainerImageMask />
        <ContainerLabel>
          <LabelTitle>{TEXTS.title}</LabelTitle>
          <LabelSubtitle>
            {TEXTS.subtitle.p1}
            <br />
            {TEXTS.subtitle.p2}
          </LabelSubtitle>
        </ContainerLabel>
      </ContainerLeft>
      <ContainerRight>{props.children}</ContainerRight>
    </Container>
  );
}
