import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../../../../UI_InfoProvider/UI_InfoProvider';
import { ITopBarProps } from './TopBar';

export const styleGen = (props: ITopBarProps, themeInfo: ThemeInfo) => {
  const { height, customCradleStyles } = props;
  const { palette } = themeInfo;

  return StyleSheet.create({
    topBarCradle: {
      height: height ? height : 'min-content',
      width: '100%',
      display: 'flex',
      backgroundColor: palette.white,
    },
    navigationButtonsCradle: {
      height: '100%',
      width: 'auto',
      padding: themeInfo.distance.one,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    customCradleStyles: { ...customCradleStyles }
  })
}