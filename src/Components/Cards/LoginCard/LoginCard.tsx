// -> Beyond Codebase
import React, { useContext, useState } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import Fade from '../../../Components/AnimationUtilities/TransitionWrappers/Fade/Fade';
import { UIContext, ThemeInfo } from '../../../Components/UI_InfoProvider/UI_InfoProvider';
import { DEFAULT_TRANSITION_MICROANIMATION_TIME } from '../../../constants';
import { underConstructionAlert } from '../../../helpers';
// -> Within Component
import EmailLoginForm from './InternalComponents/EmailLoginForm/EmailLoginForm';
import LoginChoices from './InternalComponents/LoginChoices/LoginChoices';
import { ILoginCardProps } from './helpers';
import { styleGen } from './LoginCardStyles';

const LOGIN_CHOICES_MODE = "login options mode";
const EMAIL_LOGIN_MODE = "email login mode";;

// - TODO: -> Integrate data flow into GraphQL mutations for login.
const LoginCard: React.FC<ILoginCardProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const [emailLoginFormIn, setEmailLoginFormIn] = useState(true);
  const [loginChoicesIn, setLoginChoicesIn] = useState(true);
  const [cardState, setCardState] = useState({ cardMode: LOGIN_CHOICES_MODE });
  
  const { onRegistrationClick, onSubmit } = props;
  const { cardMode } = cardState;
  const { cardCradle, topBarCradle, cardBottomCradle, titleText } = styleGen(props, themeInfo);

  const onLoginWithEmailClick = () => {
    setLoginChoicesIn(false);
    setTimeout(() => {
      setCardState({ cardMode: EMAIL_LOGIN_MODE });
      setEmailLoginFormIn(true);
    }, DEFAULT_TRANSITION_MICROANIMATION_TIME)
  };
  
  const onBackToLoginChoicesClick = () => {
    setEmailLoginFormIn(false);
    setTimeout(() => {
      setCardState({ cardMode: LOGIN_CHOICES_MODE });
      setLoginChoicesIn(true);
    }, DEFAULT_TRANSITION_MICROANIMATION_TIME)
  }

  return (
    <div className={css(cardCradle)}>
      {/* TOP BAR */}
      <div className={css(topBarCradle)}>
        {/* - TODO: -> Internationalize text */}
        <p className={css(titleText)}>LOGIN</p>
      </div>
      {/* MAIN CARD CONTENT */}
      <div className={css(cardBottomCradle)}>
        {
          (cardMode === LOGIN_CHOICES_MODE) && (
            <Fade inStatus={loginChoicesIn}>
              <LoginChoices onLoginWithEmailClick={onLoginWithEmailClick} />
            </Fade>
          )
        }
        {
          (cardMode === EMAIL_LOGIN_MODE) && (
            <Fade inStatus={emailLoginFormIn}>
              <EmailLoginForm
                onRegistrationClick={onRegistrationClick}
                onSubmit={onSubmit}
                onBackToLoginChoicesClick={onBackToLoginChoicesClick}
              />
            </Fade>
          )
        }
      </div>
    </div>
  );
}

export default LoginCard;
