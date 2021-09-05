/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description File to make available the screens for the application
 *
 */

import Login from './Login';
import Initial from './Initial';
import { UserType, InputsAndConfirm } from './CreateAccount';

const CreateAccount = {
  UserType,
  InputsAndConfirm,
};

export { Login, Initial, CreateAccount };
