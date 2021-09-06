/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description File to make available the screens for the application
 *
 */

import Login from './Login';
import Dashboard from './Dashboard';
import { UserType, InputsAndConfirm } from './CreateAccount';

const CreateAccount = {
  UserType,
  InputsAndConfirm,
};

export { Login, CreateAccount, Dashboard };
