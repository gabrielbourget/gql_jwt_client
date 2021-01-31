// -> Beyond Codebase
import React, { useContext } from 'react';
// -> Within Codebase
import Spacer from '../LayoutUtilities/Spacer/Spacer';
import { UIContext, ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { ROUNDED, LEFT, RIGHT, PRIMARY } from '../../constants';
import { styleGuide } from '../../StyleGuide/styleGuide';
// -> Within Component
import { calibrateComponent, IButtonProps } from './helpers';
import styleGen from './ButtonStyles';

const Button: React.FC<IButtonProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const {
    buttonText, onClick, icon, iconPosition, iconTextSpacing, disabled, type
  } = props;
  const styles = styleGen(props, themeInfo);
  const {
    buttonCradleStylechain, iconCradleStylechain, textStylechain
  } = calibrateComponent(props, styles);

  const computedOnClick = disabled ? () => {} : onClick;

  return (
    <>
      {
        (iconPosition === RIGHT) ? (
          <button className={buttonCradleStylechain} onClick={computedOnClick} type={type}>
            {
              (buttonText) && <p className={textStylechain}>{buttonText}</p>
            }
            {
              (icon) && (
                <>
                  { (buttonText && icon ) && <Spacer direction="horizontal" amount={iconTextSpacing} /> }
                  <div className={iconCradleStylechain}>{icon}</div>
                </>
              )
            }
          </button>
        ) : (
          <button className={buttonCradleStylechain} onClick={computedOnClick} type={type}>
            {
              (icon) && (
                <>
                  <div className={iconCradleStylechain}>{icon}</div>
                  { (buttonText && icon) && <Spacer direction="horizontal" amount={iconTextSpacing} /> }
                </>
              )
            }
            {
              (buttonText) && <p className={textStylechain}>{buttonText}</p>
            }
          </button>
        )
      }
    </>
  );
}

Button.defaultProps = {
  transparent: false,
  stretch: false,
  disabled: false,
  buttonOrder: PRIMARY,
  buttonGeometry: ROUNDED,
  iconTextSpacing: styleGuide.distance.two,
  iconPosition: LEFT,
};

export default Button;
