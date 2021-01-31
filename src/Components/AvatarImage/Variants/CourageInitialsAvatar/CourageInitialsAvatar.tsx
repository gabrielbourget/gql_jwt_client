import React, { useContext } from 'react';
import { UIContext } from '../../../UI_InfoProvider/UI_InfoProvider';
import AvatarImage from '../../AvatarImage';

interface ICourageInitialsAvatarProps {
  avatarURL?: string;
  name1?: string;
  name2?: string;
  size?: string | number;
  customTextStyles?: any;
}

export const CourageInitialsAvatar: React.FC<ICourageInitialsAvatarProps> = (props) => {
  const { themeInfo: { palette }} = useContext(UIContext);
  const { avatarURL, name1, name2, size } = props;

  return (
    <AvatarImage
      avatarURL={avatarURL}
      size={size}
      name1={name1}
      name2={name2}
      // customCradleStyles={{ backgroundImage: `linear-gradient(0deg, ${palette.secondary_p2}, ${palette.white})`}}
      customTextStyles={{ color: palette.primary_p2, fontWeight: 'bold' }}
      backgroundColor={palette.secondary_p2}
    />
  );
}

CourageInitialsAvatar.defaultProps = {
  size: 50,
};

export default CourageInitialsAvatar;
