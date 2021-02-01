// -> Beyond Codebase
import React, { useContext } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import AvatarImage from '../../../AvatarImage/AvatarImage';
import { ThemeInfo, UIContext } from '../../../UI_InfoProvider/UI_InfoProvider';
import { ROUND } from '../../../../constants';
// -> Within Component
import { styleGen } from './DropdownBaseComponentStyles';

interface IDropdownBaseComponentProps {
  name1?: string;
  name2?: string;
  avatarUrl?: string;
}

const DropdownBaseComponent: React.FC<IDropdownBaseComponentProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { name1, name2, avatarUrl } = props;
  const { cradle, avatarWrapper } = styleGen(themeInfo);

  return (
    <div className={css(cradle)}>
      {/* - TODO: -> Bring up a tooltip modal on hover that reveals key
                     personal details (aka like Twitter) */}
      <div className={css(avatarWrapper)}>
        <AvatarImage
          clickable
          name1={name1}
          name2={name2}
          avatarURL={avatarUrl}
          avatarGeometry={ROUND}
          size={28}
          avatarTextSize="1.3rem"
        />
      </div>
    </div>
  );
}

export default DropdownBaseComponent;