/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description File to make available the screens for the application
 * 
 */

import Initial from './Initial/Initial';
import Login from './Login/Login';
import { UserType, InputsAndConfirm } from './CreateAccount';

const CreateAccount = {
  UserType: UserType,
  InputsAndConfirm: InputsAndConfirm 
};

export {
  Login,
  Initial,
  CreateAccount
};

