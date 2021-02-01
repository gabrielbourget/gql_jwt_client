// -> Beyond Codebase
import React, { useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
// -> Within codebase
import { User } from '../../Types';
// -> Within component
import {
  ILoginArgs, initAuthContextValue, IRegistrationArgs
} from "./helpers";

export const AuthContext = React.createContext(initAuthContextValue);

const AuthContextProvider: React.FC = (props) => {
  const { children } = props;
  const [state, setState] = useState({
    user: undefined,
    googleLogInError: false,
  });
  

  // ----------------------------- //
  // - SET CURRENT USER IN STATE - //
  // ----------------------------- //
  const setUser = (user: any) => {
    const stateCopy = cloneDeep(state);
    // console.log('[AuthContextProvider]: setUser(): user parameter -> ', user);
    stateCopy.user = user;
    setState(stateCopy);
    return;
  };


  // ------------------------------- //
  // - GET CURRENT USER FROM STATE - //
  // ------------------------------- //
  const getUser = (): User | undefined => state.user;
  
  // ---------------- //
  // - REGISTRATION - //
  // ---------------- //
  const register = async (args: IRegistrationArgs): Promise<any> => {

  };

  // --------- //
  // - LOGIN - //
  // --------- //
  const login = async (args: ILoginArgs): Promise<any> => {
    
  };

  return (
      <AuthContext.Provider value = {{
        ...state, setUser, getUser, login, register,
      }}>
        { children }
      </AuthContext.Provider>
  );
}

export default AuthContextProvider;
