/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import styled from 'styled-components';

import { BreakPoints } from 'style/global';

const ContainerPage = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  @media (max-width: ${BreakPoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export default ContainerPage;
