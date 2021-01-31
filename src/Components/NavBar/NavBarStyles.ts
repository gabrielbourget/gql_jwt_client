import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { NAV_BAR_HEIGHT } from '../../constants';

export const styleGen = ({ themeInfo }: { themeInfo: ThemeInfo }) => {
  const { screenPadding } = themeInfo.distance.namedVariants;

  return StyleSheet.create({
    navBarCradle: {
      height: NAV_BAR_HEIGHT,
      width: '100%',
      zIndex: themeInfo.stackingIndexes.navBar,
      paddingLeft: screenPadding,
      paddingRight: screenPadding,
      // position: 'fixed',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: themeInfo.shadows.one,
    },
    homeLogoCradle: {
      height: '100%',
      width: 50,
      display: 'flex',
      alignItems: 'center',
    },
    dropdownCradle: {
      height: '100%',
      width: 100,
      display: 'flex',
    }
  });
};
