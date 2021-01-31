import { StyleSheet } from 'aphrodite';
import { IListResourceBrowserProps } from './ListResourceBrowser';
import { ThemeInfo } from '../../../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (props: IListResourceBrowserProps, themeInfo: ThemeInfo) => {
  const { resources } = props;
  const { palette } = themeInfo;

  return StyleSheet.create({
    browserCradle: {
      height: '100%',
      width: '100%',
      paddingBottom: themeInfo.distance.two,
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      backgroundColor: palette.white,
    },
    browserContentCradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: (resources.children && (resources.children.length > 0)) ? 'flex-start' : 'center',
      overflowY: 'scroll',
    },
    noContentFallbackText: {
      ...themeInfo.typography.noContentFallbackText
    }
  });
}
