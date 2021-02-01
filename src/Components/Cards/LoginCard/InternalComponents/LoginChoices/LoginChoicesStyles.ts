import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../../../../Components/UI_InfoProvider/UI_InfoProvider';

export const styleGen = (themeInfo: ThemeInfo) => {
  return StyleSheet.create({
    cradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    }
  })
}