import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { css } from 'aphrodite';

import Button from '../Button/Button';
import { HomeIcon } from '../VisualUtilities/IconPresets';
import { UIContext } from '../UI_InfoProvider/UI_InfoProvider';
import { HOME_ROUTE } from '../../constants';

import { styleGen } from './NavBarStyles';


export interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = (props) => {
  const history = useHistory();
  const uiInfo = useContext(UIContext);
  const { themeInfo } = uiInfo;
  
  // -> Styles
  const { navBarCradle, homeLogoCradle } = styleGen({themeInfo});

  const navigateHome = () => history.push(HOME_ROUTE);

  return (
    <div className={css(navBarCradle)}>
      <div className={css(homeLogoCradle)}>
        <Button
          height={40}
          width={40}
          transparent
          buttonCradlePadding={0}
          // - TODO: -> Figure out scaling issue with using SVG version of logo.
          // icon={<CourageLogo height="40px" width="40px" />}
          icon={<HomeIcon color={themeInfo.palette.primary} size={themeInfo.styles.standardIconSize} />}
          customCradleStyles={{ padding: 0, justifyContent: 'flex-start' }}
          onClick={navigateHome}
        />
      </div>
    </div>
  );
}

export default NavBar;
