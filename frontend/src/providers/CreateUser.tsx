/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import React, { useState, useContext, createContext } from 'react';

interface InterfacePropsCreateUser {
  children?: any;
}

interface InterfaceCreateUser {
  type?: string | undefined;
}

interface InterfaceContextCreateUser {
  setType: (userType: string | undefined) => void;
  getType: () => string | undefined;
}

export const CreateUserContext = createContext<InterfaceContextCreateUser>(
  {} as InterfaceContextCreateUser
);

export default function CreateUserProvider(props: InterfacePropsCreateUser) {
  const { children } = props;

  const [createUser, setCreateUser] = useState<InterfaceCreateUser>({
    type: undefined,
  });

  const setType = (userType: string | undefined) => {
    setCreateUser({
      ...createUser,
      type: userType,
    });
  };

  const getType = (): string | undefined => {
    return createUser.type;
  };

  return (
    <CreateUserContext.Provider value={{ setType, getType }}>
      {children}
    </CreateUserContext.Provider>
  );
}

export const useCreateUser = () => useContext(CreateUserContext);
