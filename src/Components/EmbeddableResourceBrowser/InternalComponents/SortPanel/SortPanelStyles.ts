import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../.././../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (themeInfo: ThemeInfo) => {
  return StyleSheet.create({
    panelCradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    sortCriteriaLabel: {
      ...themeInfo.typography.default,
      fontWeight: 'bold',
    }
  });
}
