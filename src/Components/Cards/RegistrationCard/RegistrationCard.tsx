// -> Beyond Codebase
import React, { useContext } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import { UIContext, ThemeInfo } from '../../../Components/UI_InfoProvider/UI_InfoProvider';
// -> Within Component
import RegistrationForm from './InternalComponents/RegistrationForm/RegistrationForm';
import { IRegistrationCardProps } from './helpers';
import { styleGen } from './RegistrationCardStyles';

// - TODO: -> Integrate data flow into GraphQL mutations for registration
const RegistrationCard: React.FC<IRegistrationCardProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { onSubmit, onLoginClick } = props;
  const { cardCradle, topBarCradle, cardBottomCradle, titleText } = styleGen(props, themeInfo);

  return (
    <div className={css(cardCradle)}>
      {/* TOP BAR */}
      <div className={css(topBarCradle)}>
        {/* - TODO: -> Internationalize text */}
        <p className={css(titleText)}>REGISTER</p>
      </div>
      {/* MAIN CARD CONTENT */}
      <div className={css(cardBottomCradle)}>
        <RegistrationForm onLoginClick={onLoginClick} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default RegistrationCard;
