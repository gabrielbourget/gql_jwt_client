import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../Components/UI_InfoProvider/UI_InfoProvider';

export const styleGen = (themeInfo: ThemeInfo) => {
  return StyleSheet.create({
    pageCradle: {
      display: 'flex',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: themeInfo.palette.white,
    }
  });
}
