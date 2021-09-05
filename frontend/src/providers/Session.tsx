/**
 *
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 *
 */

import React, { useContext, createContext } from 'react';

interface IPropsSessionContext {
  children?: any;
}

interface ISession {
  isLoggedIn: () => boolean;
}

export const SessionContext = createContext<ISession>({} as ISession);

export default function SessionProvider(props: IPropsSessionContext) {
  const { children } = props;

  const isLoggedIn = (): boolean => {
    return true;
  };

  return (
    <SessionContext.Provider value={{ isLoggedIn }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSesssion = () => useContext(SessionContext);
