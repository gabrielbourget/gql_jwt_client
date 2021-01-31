import { StyleSheet } from 'aphrodite';
import { IAvatarImageProps } from './helpers';
import { ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { palette } from "../../StyleGuide/colors";

export const styleGen = (props: IAvatarImageProps, themeInfo: ThemeInfo) => {
  const {
    avatarTextSize, size, backgroundColor,
    border, customCradleStyles, customTextStyles,
    customCradleHoverStyles, onClick, clickable
  } = props;
  const { borderRadii, fonts } = themeInfo;

  return StyleSheet.create({
    avatarCradle: {
      height: size ? size : 40,
      width: size ? size : 40,
      display: 'grid',
      placeItems: 'center',
      backgroundColor: backgroundColor ? backgroundColor : palette.grey1,
      border: border ? border : 'none',

      ':hover': {
        cursor: (clickable || onClick) ? 'pointer' : 'auto',
        ...customCradleHoverStyles,
      }
    },
    avatarCradleRounded: { borderRadius: borderRadii.one },
    avatarCradleRound: { borderRadius: 50000 },
    customCradleStyles: { ...customCradleStyles },
    avatarImg: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
    avatarImgRounded: { borderRadius: borderRadii.one },
    avatarImgRound: { borderRadius: 50000 },
    avatarInitialsText: {
      fontFamily: fonts.primary,
      fontSize: avatarTextSize ? avatarTextSize : '2.1rem',
      margin: 0,
    },
    customTextStyles: { ...customTextStyles }
  });
}
