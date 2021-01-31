// -> Beyond Codebase
import React, { useContext } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import AvatarImage from '../AvatarImage/AvatarImage';
import { UIContext, ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
// -> Within Compoennt
import { styleGen } from './ClickableListItemStyles';

// - TODO: -> Weakness here having to use string constants for geometry. Find way to use constants.
export interface IListItemProps {
  avatarURL?: string;
  icon?: any;
  avatarSize?: number;
  name1?: string;
  name2?: string;
  listItemText: string;
  customCradleStyles?: any;
  customTextStyles?: any;
  onClick?(): void;
}

// - TODO: -> Implement icon/avatar position to left or right to prepare for RTL language localization.
const ClickableListItem: React.FC<IListItemProps> = (props) => {
  const {
    avatarURL, name1, name2, avatarSize, listItemText, onClick, icon
  } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const {
    listItemCradle, listItemTextStyle, customCradleStyles, customTextStyles
  } = styleGen(props, themeInfo);

  const listItemCradleStylechain = css(listItemCradle, customCradleStyles);
  const listItemTextStylechain = css(listItemTextStyle, customTextStyles);

  // console.log('name1 -> ', name1);
  // console.log('name2 -> ', name2);

  return (
    <div className={listItemCradleStylechain} onClick={onClick}>
      {
        (avatarURL || (name1 && name2)) && (
          <>
            <AvatarImage
              avatarURL={avatarURL}
              name1={name1}
              name2={name2}
              size={avatarSize}
            /> 
            <div style={{ marginRight: themeInfo.distance.two }}></div>
          </>
        )
      }
      {
        icon && (
          <>
            {icon}
            <div style={{ marginRight: themeInfo.distance.two }}></div>
          </>
        )
      }
      <p className={listItemTextStylechain}>{listItemText}</p>
    </div>
  );
}

ClickableListItem.defaultProps = {
  avatarSize: 25,
}

export default ClickableListItem;
