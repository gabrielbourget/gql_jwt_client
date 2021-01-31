import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (themeInfo: ThemeInfo) => {
  const { palette } = themeInfo;

  return StyleSheet.create({
    pageCradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: themeInfo.gradients.bgPrimaryToTransparentVertical,
    },
    headerCradle: {
      height: 'auto',
      width: 250,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      ...themeInfo.fonts.secondary.semiBold,
      fontSize: '2.4rem',
      color: palette.primary,
      lineHeight: 1.0,
    },
    textCradle: {
      height: 'auto',
      width: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      lineHeight: 1.5,
      fontWeight: 300,

      '@media only screen and (max-width: 500px)': {
        width: 350
      },

      '@media only screen and (max-width: 375px)': {
        width: 250
      }
    },
    bodyText: {
      fontFamily: themeInfo.fonts.primary,
      fontSize: '1.8rem',
      color: palette.black,
    }
  });
}