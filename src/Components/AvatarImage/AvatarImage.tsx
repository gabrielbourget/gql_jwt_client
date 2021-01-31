// - TODO: -> Find some way to flow to showing initials if the avatar fails
//            to load from a network request. Can probably just do it with a 
//            boolean in state.

// -> Beyond Codebase
import React, { useContext } from 'react';
// -> Within Codebase
import { UIContext, ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { ROUND } from '../../constants';
// -> Within Component
import { styleGen } from './AvatarImageStyles';
import { generateInitials, calibrateComponent, IAvatarImageProps } from './helpers';

export const AvatarImage: React.FC<IAvatarImageProps> = (props) => {
  const { avatarURL, name1, name2, onClick } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);

  const styles = styleGen(props, themeInfo);
  const {
    avatarCradleStylechain, avatarImgStylechain, avatarInitialsStylechain
  } = calibrateComponent(props, themeInfo, styles);

  return (
    <div className={avatarCradleStylechain} onClick={onClick}>
      {
        (avatarURL) ? (
          <img src={avatarURL} alt="Avatar" className={avatarImgStylechain}/>
        ) : (
          <p className={avatarInitialsStylechain}>
            { generateInitials(name1, name2) }
          </p>
        )
      }
    </div>
  );
}

AvatarImage.defaultProps = {
  avatarGeometry: ROUND,
  size: 45,
};

export default AvatarImage;
