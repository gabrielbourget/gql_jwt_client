// -> Beyond Codebase
import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import { css } from 'aphrodite';
// -> Within Codebase
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
// import ImageWrapper from "../VisualUtilities/ImageWrapper/ImageWrapper";
import Fade from '../AnimationUtilities/TransitionWrappers/Fade/Fade';
import { HomeIcon } from '../VisualUtilities/IconPresets';
import { UIContext, ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { AuthContext } from '../AuthContextProvider/AuthContextProvider';
import {
  HOME_ROUTE, LOGIN_ROUTE, NAV_BAR_HEIGHT, PROFILE_ROUTE, ROUNDED,
} from '../../constants';
// -> Within Component
import DropdownBaseComponent from './InternalComponents/DropdownBaseComponent/DropdownBaseComponent';
import DropdownDropComponent from './InternalComponents/DropdownDropComponent/DropdownDropComponent';
import { styleGen } from './NavBarStyles';

export interface INavBarProps {}

const NavBar: React.FC<INavBarProps> = () => {
  const history = useHistory();
  const uiInfo = useContext(UIContext);
  const { themeInfo }: { themeInfo: ThemeInfo } = uiInfo;
  const { getUser, logout: authContextLogout } = useContext(AuthContext);
  const { navBarCradle, homeLogoCradle } = styleGen({themeInfo});

  const navigateHome = () => history.push(HOME_ROUTE);
  const navigateToLogin = () => history.push(LOGIN_ROUTE);
  const logout = () => {
    authContextLogout();
    history.push(LOGIN_ROUTE);
  };

  const navigateToUserProfile = () => history.push(PROFILE_ROUTE);

  const user = getUser();

  return (
    <div className={css(navBarCradle)}>
      <div className={css(homeLogoCradle)}>
        <Fade>
          <Button
            height={40}
            width={40}
            transparent
            buttonCradlePadding={0}
            icon={<HomeIcon color={themeInfo.palette.primary} size={themeInfo.styles.standardIconSize} />}
            customCradleStyles={{ padding: 0, justifyContent: 'flex-start' }}
            onClick={navigateHome}
          />
        </Fade>
      </div>
      {
        (user) ? (
          <Fade>
            <Dropdown
              onSelectItem={() => {}}
              closeDropCradleOnSelect
              geometry={ROUNDED}
              dropCradleGap={10}
              baseCradleBorder="none"
              customDropdownCradleStyles={{ padding: 0, height: NAV_BAR_HEIGHT }}
              customBaseCradleStyles={{ padding: 0, height: NAV_BAR_HEIGHT }}
              customDropCradleStyles={{ padding: 0 }}
              CustomBaseCradleComponent={
                <DropdownBaseComponent
                  avatarUrl={undefined}
                />
              }
              CustomDropdownComponent={
                <DropdownDropComponent
                  logout={logout}
                  navigateToUserProfile={navigateToUserProfile}
                />
              }
            />
          </Fade>
        ) : (
          <Fade>
            <Button
              buttonText="LOG IN"
              onClick={navigateToLogin}
              customCradleStyles={{ padding: themeInfo.distance.one }}
              customTextStyles={{ fontWeight: 'bold', fontSize: '1.2rem' }}
            />
          </Fade>
        )
      }
    </div>
  );
}

export default NavBar;
