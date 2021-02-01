// -> Beyond Codebase
import React, { useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
// -> Within codebase
import { User } from '../../Types';
import { useRegisterMutation } from "../../generated/graphql";
// -> Within component
import {
  IAuthContextState, ILoginArgs, initAuthContextValue, IRegistrationArgs
} from "./helpers";

export const AuthContext = React.createContext(initAuthContextValue);

const AuthContextProvider: React.FC = (props) => {
  const { children } = props;
  const [state, setState] = useState<IAuthContextState>({ user: undefined });
  const [APIRegister] = useRegisterMutation();

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
    debugger;
    const { email, password } = args;
    const response = await APIRegister({ variables: { email, password }});

    console.log('register response -> ', response);
  };


  // --------- //
  // - LOGIN - //
  // --------- //
  const login = async (args: ILoginArgs): Promise<any> => {
    
  };


  // ---------- //
  // - LOGOUT - //
  // ---------- //
  const logout = () => {
    // JWTManager.eraseToken();
    // JWTManager.eraseRefreshToken();
    // JWTManager.eraseExpiryDateTime();
    setUser(undefined);
  }

  return (
      <AuthContext.Provider value={{
        ...state, setUser, getUser, login,
        register, logout,
      }}>
        { children }
      </AuthContext.Provider>
  );
}

export default AuthContextProvider;
