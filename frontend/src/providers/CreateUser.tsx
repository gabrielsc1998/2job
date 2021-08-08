/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 * 
 */

import React, { 
  useState,
  useContext,
  createContext
} from 'react';

interface InterfacePropsCreateUser {
  type?: 'dev' | 'company';
  children?: any;
};

interface InterfaceContextCreateUser {
  setType: (userType: string) => void;
};

export const CreateUserContext = createContext<InterfaceContextCreateUser>({} as InterfaceContextCreateUser);

export default function CreateUserProvider(props: InterfacePropsCreateUser) {
  const { children } = props;

  const [createUser, setCreateUser] = useState({
    type: ''
  });

  const setType = (userType: string) => {
    console.log(userType);
    setCreateUser({
      ...createUser,
      type: userType
    });
  }

  return (
    <CreateUserContext.Provider value={{ setType }} >
      {children}
    </CreateUserContext.Provider>
  );
}

export const useCreateUser = () => useContext(CreateUserContext);