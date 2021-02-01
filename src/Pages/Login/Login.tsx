/* eslint-disable react-hooks/rules-of-hooks */
// -> Beyond Codebase
import React, { useContext, useEffect, useState } from 'react';
import { css } from 'aphrodite';
import { useHistory, useLocation, RouteProps } from 'react-router-dom';
// -> Within Codebase
import FillUnderNavBarCradle from '../../Components/LayoutUtilities/Cradles/FillUnderNavBarCradle/FillUnderNavBarCradle';
import VerticalFade from '../../Components/AnimationUtilities/TransitionWrappers/VerticalFade/VerticalFade';
import LoginCard from "../../Components/Cards/LoginCard/LoginCard";
import CircleLoader from '../../Components/Loaders/CircleLoader/CircleLoader';
import Fade from '../../Components/AnimationUtilities/TransitionWrappers/Fade/Fade';
import { ThemeInfo, UIContext } from '../../Components/UI_InfoProvider/UI_InfoProvider';
import { AuthContext } from "../../Components/AuthContextProvider/AuthContextProvider";
import {
  REGISTRATION_ROUTE, DEFAULT_TRANSITION_MICROANIMATION_TIME, PROFILE_ROUTE,
} from "../../constants"
import { underConstructionAlert, useCustomAlert } from "../../helpers";
import { mapHttpErrorCodeToMessage } from "../../helpers/";
import { useLoginMutation } from "../../generated/graphql";
// -> Within Component
import { styleGen } from './LoginStyles';
import { ILoginArgs } from '../../Components/AuthContextProvider/helpers';

const Login: React.FC = (props) => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [loginCardInStatus, setLoginCardInStatus] = useState(true);
  const [loaderInStatus, setLoaderInStatus] = useState(true);
  const history = useHistory();
  // const { state: locationState }: RouteProps["location"] = useLocation(); // - TODO: -> Figure out Typescript blocker here.
  const { state: locationState }: any = useLocation(); // - TODO: -> Figure out Typescript blocker here.
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { login } = useContext(AuthContext)
  const { pageCradle } = styleGen(themeInfo);
  const [APILogin] = useLoginMutation();
  
  let loginCardTimeout: ReturnType<typeof setTimeout>;
  let loaderTimeout: ReturnType<typeof setTimeout>;
  let redirectURL: string | undefined = undefined;

  if (locationState && locationState.redirectURL) redirectURL = locationState.redirectURL.pathname;

  // -> Clean up resources to avoid memory leaks.
  useEffect(() => {
    return () => {
      clearTimeout(loginCardTimeout);
      clearTimeout(loaderTimeout);
    };
  }, []);

  const navigateToRegistration = () => history.push(REGISTRATION_ROUTE);
  const navigateToUserProfile = () => history.push(PROFILE_ROUTE);
  
  const onLoginSubmission = async (values: ILoginArgs) => {
    // -> Allow login card to transition down before the loader is shown
    setLoginCardInStatus(false);
    loginCardTimeout = setTimeout(() => {
      setLoadingStatus(true);
    }, DEFAULT_TRANSITION_MICROANIMATION_TIME);

    // const { error } = await login(values);
    const { email, password } = values;
    const response = await APILogin({ variables: { email, password }});

    console.log("login response -> ", response);
    
    let error: any;
    if (error) {
      setErrorStatus(true);
      setLoaderInStatus(false);
      loaderTimeout = setTimeout(() => {
        setLoadingStatus(false);
        setLoginCardInStatus(true);
        useCustomAlert(mapHttpErrorCodeToMessage(error), themeInfo);
      }, DEFAULT_TRANSITION_MICROANIMATION_TIME);
    }
    
    else {
      // -> Allow loader to fade out before pushing to the user profile page
      setLoaderInStatus(false);
      loaderTimeout = setTimeout(() => {
        if (redirectURL) history.push(redirectURL);
        else navigateToUserProfile();
      }, DEFAULT_TRANSITION_MICROANIMATION_TIME);
    }
  };

  return (
    <FillUnderNavBarCradle>
      <div className={css(pageCradle)}>
        {
          (!loadingStatus) ? (
            <VerticalFade inStatus={loginCardInStatus}>
              <LoginCard
                onRegistrationClick={navigateToRegistration}
                onSubmit={onLoginSubmission}
              />
            </VerticalFade>
          ) : (
            <Fade inStatus={loaderInStatus}>
              <CircleLoader spinnerColor={themeInfo.palette.primary} />
            </Fade>
          )
        }
      </div>
    </FillUnderNavBarCradle>
  );
}

export default Login;
