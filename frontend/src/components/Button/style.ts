/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { FlexBoxCentralize } from 'style/global';

const MaterialButton = styled(Button)`
  && {
    width: 100%;
    min-width: 100px;
    color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    &:hover {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.background};
    }
    ${FlexBoxCentralize};
  }
`;

export default MaterialButton;
