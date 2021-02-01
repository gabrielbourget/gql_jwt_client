import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (themeInfo: ThemeInfo) => {
  return StyleSheet.create({
    cradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: themeInfo.palette.white,
    },
    avatarWrapper: {
      ':hover': { cursor: 'pointer' },
    }
  });
}
