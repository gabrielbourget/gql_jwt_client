import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../../../../Components/UI_InfoProvider/UI_InfoProvider';

export const styleGen = (themeInfo: ThemeInfo) => {
  return StyleSheet.create({
    formCradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    topCradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomCradle: {
      height: 'auto',
      width: '100%',
      display: 'flex',
      flexDirection: "column",
      alignItems: 'center',
    },
    bottomMessageCradle: {
      height: "auto",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    bottomMessageText: {
      ...themeInfo.typography.default,
      color: themeInfo.palette.grey3,
      fontStyle: "italic",
      marginBottom: 0,
    }
  });
}
