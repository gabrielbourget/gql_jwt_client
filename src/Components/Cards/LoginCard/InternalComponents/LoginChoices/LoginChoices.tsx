// -> Beyond Codebase
import React, { useContext, useEffect, useRef } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import Button from "../../../../../Components/Button/Button";
import { EmailIcon, GoogleIconColor } from "../../../../../Components/VisualUtilities/IconPresets";
import { UIContext, ThemeInfo } from "../../../../../Components/UI_InfoProvider/UI_InfoProvider";
import { AuthContext } from "../../../../../Components/AuthContextProvider/AuthContextProvider";
import { ROUNDED } from '../../../../../constants';
import { underConstructionAlert } from '../../../../../helpers';
// -> Within Component
import { styleGen } from './LoginChoicesStyles';

interface ILoginChoicesProps { onLoginWithEmailClick: any; }

const BUTTON_WIDTH = 200;

const LoginChoices: React.FC<ILoginChoicesProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { setUser } = useContext(AuthContext);
  
  const { onLoginWithEmailClick } = props;

  const { cradle } = styleGen(themeInfo);

  return (
    <div className={css(cradle)}>
      {/* - TODO: -> Internationalize Text */}
      <Button
        icon={<EmailIcon color={themeInfo.palette.primary} size={themeInfo.styles.standardIconSize} />}
        buttonText="Via Email"
        textColor={themeInfo.palette.black}
        onClick={onLoginWithEmailClick}
        transparent
        width={BUTTON_WIDTH}
        customCradleStyles={{ boxShadow: themeInfo.shadows.one }}
      />
      <div style={{ marginTop: themeInfo.distance.two }}></div>
      {/* - TODO: -> Internationalize Text */}
      <Button
        icon={<GoogleIconColor color={themeInfo.palette.primary} size={themeInfo.styles.standardIconSize} />}
        buttonText="Via Google"
        textColor={themeInfo.palette.black}
        onClick={underConstructionAlert}
        transparent
        buttonGeometry={ROUNDED}
        width={BUTTON_WIDTH}
        customCradleStyles={{ boxShadow: themeInfo.shadows.one }}
      />
    </div>
  );
}

export default LoginChoices;
