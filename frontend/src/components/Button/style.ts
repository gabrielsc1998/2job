/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { colors as teste, FlexBoxCentralize } from 'style/global';

const MaterialButton = styled(Button)`
  && {
    width: 100%;
    min-width: 100px;
    color: ${teste.SECONDARY};
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    &:hover {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${teste.SECONDARY};
    }
    ${FlexBoxCentralize};
  }
`;

export default MaterialButton;
