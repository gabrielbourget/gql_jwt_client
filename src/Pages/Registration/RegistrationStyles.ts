import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../Components/UI_InfoProvider/UI_InfoProvider';
import { NAV_BAR_HEIGHT } from '../../constants';

export const styleGen = (themeInfo: ThemeInfo) => {
  return StyleSheet.create({
    pageCradle: {
      height: 'auto',
      minHeight: `calc(100vh - ${NAV_BAR_HEIGHT})`,
      width: '100%',
      display: 'grid',
      placeItems:'center',
      backgroundColor: themeInfo.palette.white,
    }
  });
}
