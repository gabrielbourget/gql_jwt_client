import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../Components/UI_InfoProvider/UI_InfoProvider';
import { NAV_BAR_HEIGHT } from '../../constants';

export const styleGen = (themeInfo: ThemeInfo) => {
  return StyleSheet.create({
    cradle: {
      height: 'auto',
      minHeight: `calc(100vh - ${NAV_BAR_HEIGHT}px)`,
      width: '100%',
      display: 'grid',
      placeItems: 'center',
      placeContent: 'center',
    },
    titleText: {
      fontFamily: themeInfo.fonts.primary,
      fontSize: 30,
      fontWeight: 'bold',
      fontStyle: 'italic',
      textDecoration: 'underline',
    }
  })
}