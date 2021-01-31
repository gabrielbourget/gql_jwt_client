// -> Beyond Codebase
import React, { useEffect, useRef, useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
// import { useMutation } from 'react-apollo';
// -> Within Codebase
// import { Viewer } from '../../lib/Types';
// import { GOOGLE_LOGIN_MUTATION } from '../../lib/graphql/mutations/GoogleLogIn';
// import { googleLogin as GoogleLoginData, googleLoginVariables } from '../../lib/graphql/mutations/GoogleLogIn/__generated__/googleLogin';
// import { X_CSRF_TOKEN_NAME } from '../../constants';

// -> Overall concept of this component is to act as an authentication/authorization
//    context for the whole application. Information about the current user can be pulled
//    down from here along with triggering actions such as attempting to log in and log out.
//   -> Full stack context of a previous codebase this came from was completing Google login
//      via a standalone GraphQL server.
//   -> That stuff is commented out since there are missing files, but the code still paints
//      the picture of part of this subsystem's potential for funcationality.

/* - TODO: -> Refactor this beyond just Google Login */
export interface AuthContext {
  viewer?: any; //Viewer;
  setViewer(viewer?: any/*Viewer*/): void;
  googleLogInError: boolean;
}

/* - TODO: -> Refactor this beyond just Google Login */
const initAuthContextValue: AuthContext = {
    viewer: undefined,
    setViewer: () => {},
    googleLogInError: false,
}

export const AuthContext = React.createContext(initAuthContextValue);

// - TODO: -> Refactor this component to do state management with 'useReducer'
/* - TODO: -> Refactor this beyond just Google Login */
const AuthContextProvider: React.FC = (props) => {
  const { children } = props;
  const [state, setState] = useState({
    viewer: undefined,
    googleLogInError: false,
  });
  // const [googleLogIn, { error: googleLogInError }] = useMutation<GoogleLoginData, googleLoginVariables>(GOOGLE_LOGIN_MUTATION, {
  //   onCompleted: (data: GoogleLoginData) => {
  //     if (data && data.googleLogIn) {
  //       setViewer(data.googleLogIn)

  //       if (data.googleLogIn.token) {
  //         sessionStorage.setItem(X_CSRF_TOKEN_NAME, data.googleLogIn.token);
  //       } else {
  //         sessionStorage.removeItem(X_CSRF_TOKEN_NAME);
  //       }
  //     }
  //   }
  // })

  // const googleLogInRef = useRef(googleLogIn);

  // useEffect(() => {
  //   googleLogInRef.current();
  // }, [])

  // if (googleLogInError) setState({ ...state, googleLogInError: true })

  const setViewer = (viewer: any) => {
    const stateCopy = cloneDeep(state);
    // console.log('[AuthContextProvider]: setViewer(): viewer parameter -> ', viewer);
    stateCopy.viewer = viewer;
    setState(stateCopy);
    return;
  }


  const setViewerRef = useRef(setViewer);

  return (
      <AuthContext.Provider value = {{ ...state, setViewer: setViewerRef.current }}>
        { children }
      </AuthContext.Provider>
  );
}

export default AuthContextProvider;
