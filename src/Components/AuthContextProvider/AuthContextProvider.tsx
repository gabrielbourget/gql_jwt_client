// -> Beyond Codebase
import React, { useEffect, useRef, useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
import { useQuery, useMutation, gql } from "@apollo/client";
// -> Within codebase
import { User } from '../../Types';
// -> Within component
import { initAuthContextValue } from "./helpers";

export const AuthContext = React.createContext(initAuthContextValue);

const AuthContextProvider: React.FC = (props) => {
  const { children } = props;
  const [state, setState] = useState({
    user: undefined,
    googleLogInError: false,
  });
  

  // -> Set user into state
  const setUser = (user: any) => {
    const stateCopy = cloneDeep(state);
    // console.log('[AuthContextProvider]: setUser(): user parameter -> ', user);
    stateCopy.user = user;
    setState(stateCopy);
    return;
  };


  // -> Get user from state
  const getUser = (): User | undefined => state.user;


  return (
      <AuthContext.Provider value = {{ ...state, setUser, getUser }}>
        { children }
      </AuthContext.Provider>
  );
}

export default AuthContextProvider;
