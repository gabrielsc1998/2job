/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description Container default
 *
 */

import { TChildren } from 'types';

import ContainerPage from './style';

interface IPropsContainer {
  children?: TChildren;
}

export default function Container(props: IPropsContainer) {
  return <ContainerPage>{props.children}</ContainerPage>;
}
