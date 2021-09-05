/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import { Container } from 'components';

import {
  ContainerLeft,
  ContainerRight,
  ContainerLabel,
  LabelTitle,
  LabelSubtitle,
} from './style';

import TEXTS from './texts';

export default function ContainerInitialForms(props: any) {
  return (
    <Container>
      <ContainerLeft>
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
