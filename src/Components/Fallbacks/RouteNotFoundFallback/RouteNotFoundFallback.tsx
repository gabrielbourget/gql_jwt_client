// -> Beyond Codebase
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { css } from 'aphrodite';
// -> Within Codebase
import FillUnderNavBarCradle from '../../LayoutUtilities/Cradles/FillUnderNavBarCradle/FillUnderNavBarCradle';
import Button from '../../Button/Button';
import SadFaceIcon from '../../VisualUtilities/IconPresets/SadFaceIcon';
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { HOME_ROUTE } from '../../../constants';
// -> Within Component
import { styleGen } from './RouteNotFoundFallbackStyles';

const RouteNotFoundFallback: React.FC = () => {
  const history = useHistory();
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const {
    pageCradle, headerCradle, headerText,
    textCradle, bodyText
  } = styleGen(themeInfo);

  const navigateToTheHub = () => history.push(HOME_ROUTE);

  return (
    <FillUnderNavBarCradle>
      <div className={css(pageCradle)}>
        <div className={css(headerCradle)}>
          <SadFaceIcon color={themeInfo.palette.primary} size={30} />
          <div style={{ marginRight: themeInfo.distance.two }}></div>
          {/* - TODO: -> Internationalize text */}
          <p className={css(headerText)}>No Such Luck...</p>
        </div>
        <div style={{ marginTop: themeInfo.distance.one }}></div>
        <div className={css(textCradle)}>
          {/* - TODO: -> Internationalize text */}
          <p className={css(bodyText)}>Looks like this route doesn't lead anywhere.</p>
        </div>
        <div style={{ marginTop: themeInfo.distance.four }}></div>
        <Button
          // - TODO: -> Internationalize text
          buttonText="Access The Hub"
          onClick={navigateToTheHub}
          customCradleHoverStyles={{ boxShadow: themeInfo.shadows.two }}
          customCradleStyles={{ transition: themeInfo.transitions.boxShadowTransition }}
        />
      </div>
    </FillUnderNavBarCradle>
  );
}

export default RouteNotFoundFallback;
