/* eslint-disable react-hooks/rules-of-hooks */
// -> Beyond Codebase
import React, { useContext, useEffect, useState } from 'react';
import { css } from 'aphrodite';
import { useHistory } from 'react-router-dom';
// -> Within Codebase
import { IRegistrationArgs } from '../../Components/AuthContextProvider/helpers';
import FillUnderNavBarCradle from '../../Components/LayoutUtilities/Cradles/FillUnderNavBarCradle/FillUnderNavBarCradle'
import VerticalFade from '../../Components/AnimationUtilities/TransitionWrappers/VerticalFade/VerticalFade';
import RegistrationCard from "../../Components/Cards/RegistrationCard/RegistrationCard";
import CircleLoader from '../../Components/Loaders/CircleLoader/CircleLoader';
import { ThemeInfo, UIContext } from '../../Components/UI_InfoProvider/UI_InfoProvider';
import { AuthContext } from "../../Components/AuthContextProvider/AuthContextProvider";
import { LOGIN_ROUTE, DEFAULT_TRANSITION_MICROANIMATION_TIME } from '../../constants';
// -> Within Component
import { styleGen } from './RegistrationStyles';
import { mapHttpErrorCodeToMessage, useCustomAlert } from '../../helpers';

// - TODO: -> Hook this component up full stack to a GraphQL mutation that can carry out registrations.
const Registration: React.FC = (props) => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [cardInStatus, setCardInStatus] = useState(true);
  const [loaderInStatus, setLoaderInStatus] = useState(true);
  const history = useHistory();
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { register } = useContext(AuthContext);
  const { pageCradle } = styleGen(themeInfo);

  let registrationCardTimeout: ReturnType<typeof setTimeout>;
  let loaderTimeout: ReturnType<typeof setTimeout>;

  // -> Clean up timeouts to avoid memory leaks.
  useEffect(() => {
    return () => {
      clearTimeout(registrationCardTimeout);
      clearTimeout(loaderTimeout);
    };
  }, []);

  const navigateToLogin = () => history.push(LOGIN_ROUTE);

  const onRegistrationSubmission = async (values: IRegistrationArgs) => {
    // -> Allow registration card to transition down before loading spinner is shown
    setCardInStatus(false);
    registrationCardTimeout = setTimeout(() => {
      setLoadingStatus(true);
    }, DEFAULT_TRANSITION_MICROANIMATION_TIME);
    
    const { error } = await register(values);

    if (error) {
      setErrorStatus(true);
      setLoaderInStatus(false);
      loaderTimeout = setTimeout(() => {
        setLoadingStatus(false);
        setCardInStatus(true);
        useCustomAlert(mapHttpErrorCodeToMessage(error), themeInfo);
      }, DEFAULT_TRANSITION_MICROANIMATION_TIME);
    }
    
    else {
      // - TODO: -> Build UX flow here where there's a confirmation of registration card which appears for a brief moment first.
      setLoaderInStatus(false);
      loaderTimeout = setTimeout(() => {
        history.push(LOGIN_ROUTE);
      }, DEFAULT_TRANSITION_MICROANIMATION_TIME);
    }
  };

  return (
    <FillUnderNavBarCradle>
      <div className={css(pageCradle)}>
        {
          (!loadingStatus) ? (
            <VerticalFade inStatus={cardInStatus}>
              <RegistrationCard onLoginClick={navigateToLogin} onSubmit={onRegistrationSubmission} />
            </VerticalFade>
          ) : (
            <CircleLoader spinnerColor={themeInfo.palette.primary} />
          )
        }
      </div>
    </FillUnderNavBarCradle>
  );
}

export default Registration;
