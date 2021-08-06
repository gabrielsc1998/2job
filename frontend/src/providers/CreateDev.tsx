/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 * 
 */

import React, { useContext, createContext } from 'react';

interface InterfaceCreateDev {
};

export const CreateDevContext = createContext<InterfaceCreateDev>({} as InterfaceCreateDev);

export default function CreateDevProvider(props: any) {

  return (
    <CreateDevContext.Provider value={{}} >
      {props.children}
    </CreateDevContext.Provider>
  );
}

export const useCreateDev = () => useContext(CreateDevContext);