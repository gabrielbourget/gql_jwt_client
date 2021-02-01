// -> Beyond Codebase
import React, { useContext } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import { ThemeInfo, UIContext } from '../../../UI_InfoProvider/UI_InfoProvider';
import { MoreDetailsIcon, PersonIcon } from '../../../VisualUtilities/IconPresets'
// -> Within Component
import { styleGen } from './DropdownDropComponentStyles';

interface IDropdownDropComponentProps {
  logout(): void;
  navigateToUserProfile(): void;
}

const DropdownDropComponent: React.FC<IDropdownDropComponentProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { logout, navigateToUserProfile } = props;
  const { cradle, dropdownOption, dropdownOptionText } = styleGen(themeInfo);

  return (
    <div className={css(cradle)}>
      <div className={css(dropdownOption)} onClick={() => navigateToUserProfile()}>
        <p className={css(dropdownOptionText)}>PROFILE</p>
        <PersonIcon color={themeInfo.palette.primary} size={themeInfo.styles.standardIconSize} />
      </div>
      <div className={css(dropdownOption)} onClick={logout}>
        <p className={css(dropdownOptionText)}>LOG OUT</p>
        <MoreDetailsIcon color={themeInfo.palette.primary} size={themeInfo.styles.standardIconSize} />
      </div>
    </div>
  );
}

export default DropdownDropComponent;
