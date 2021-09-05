/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { colors, FlexBoxCentralize } from 'style/global';

const MaterialButton = styled(Button)`
  && {
    width: 100%;
    min-width: 100px;
    color: ${colors.SECONDARY};
    border-color: ${colors.PRIMARY};
    background-color: ${colors.PRIMARY};
    &:hover {
      font-weight: bold;
      color: ${colors.PRIMARY};
      background-color: ${colors.SECONDARY};
    }
    ${FlexBoxCentralize};
  }
`;

export default MaterialButton;
