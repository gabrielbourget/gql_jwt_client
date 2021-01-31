import {StyleSheet} from 'aphrodite';
import { ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { IButtonProps } from './helpers';

const styleGen = (props: IButtonProps, themeInfo: ThemeInfo) => {
  const {
    buttonCradlePadding, stretch, disabled,
    height, width, customCradleStyles, color, textColor,
    customIconCradleStyles, customTextStyles,
    customCradleHoverStyles,
  } = props;
  
  let computedWidth: string | number = 'auto';
  if (width) computedWidth = width;
  if (stretch && width) computedWidth = width;
  if (stretch && !(width)) computedWidth = 'auto';

  return StyleSheet.create({
    buttonCradle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: (height) ? height : 'auto',
      width: computedWidth,
      padding: (buttonCradlePadding) ? buttonCradlePadding : themeInfo.distance.two,
      opacity: (disabled) ? themeInfo.styles.disabledOpacity : 1.0,
      ':hover': {
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...customCradleHoverStyles
      },
      border: 'none',
      // - TODO: -> Consider keeping the outline for accessibility reasons, or maybe toggling it on voluntarily.
      ':focus': { outline: 0 },
    },
    buttonCradleRounded: {borderRadius: themeInfo.borderRadii.one},
    buttonCradleRound: {borderRadius: 50000},
    buttonCradleAspectRatio: {aspectRadio: 1},
    buttonCradlePrimary: {backgroundColor: themeInfo.palette.primary},
    buttonCradleSecondary: {backgroundColor: themeInfo.palette.secondary},
    buttonCradleTertiary: {backgroundColor: themeInfo.palette.tertiary},
    buttonCradleQuaternary: {backgroundColor: themeInfo.palette.quaternary},
    buttonCradleQuintenary: {backgroundColor: themeInfo.palette.quintenary},
    buttonCradleTransparent: {backgroundColor: 'transparent'},
    buttonCradleCustomColor: {backgroundColor: color},
    iconCradle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: themeInfo.fonts.primary,
      fontSize: '1.6rem',
      color: (textColor) ? textColor : themeInfo.palette.white,
      marginTop: 0,
      marginBottom: 0,
    },
    customCradleStyles: { ...customCradleStyles },
    customIconCradleStyles: { ...customIconCradleStyles },
    customTextStyles: { ...customTextStyles },
  });
};

export default styleGen;