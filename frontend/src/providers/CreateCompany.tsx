/**
 * 
 * @author Gabriel da Silva Caetano
 * @email <98gabrielSc@gmail.com>
 * @description
 * 
 */

import React, { useContext, createContext } from 'react';

interface InterfaceCreateCompany {
};

export const CreateCompanyContext = createContext<InterfaceCreateCompany>({} as InterfaceCreateCompany);

export default function CreateCompanyProvider(props: any) {

  return (
    <CreateCompanyContext.Provider value={{}} >
      {props.children}
    </CreateCompanyContext.Provider>
  );
}

export const useCreateDev = () => useContext(CreateCompanyContext);