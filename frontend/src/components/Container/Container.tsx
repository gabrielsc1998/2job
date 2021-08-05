/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description 
 * 
 */

import { ContainerPage } from "./style";

export default function Container(props: any) {
  return (
    <ContainerPage>
      {props.children}
    </ContainerPage>
  )
}