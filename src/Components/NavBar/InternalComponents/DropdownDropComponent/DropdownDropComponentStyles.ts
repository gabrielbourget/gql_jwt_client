import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (themeInfo: ThemeInfo) => {
  return StyleSheet.create({
    cradle: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    dropdownOption: {
      height: 50,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: themeInfo.distance.two,
      paddingRight: themeInfo.distance.two,
      transition: themeInfo.transitions.bgColorTransition,
      backgroundColor: themeInfo.palette.white,
      borderRadius: themeInfo.borderRadii.one,
      ':hover': {
        backgroundColor: themeInfo.palette.grey1,
        cursor: 'pointer',
      },
    },
    dropdownOptionText: {
      ...themeInfo.typography.default,
      margin: 0,
    }
  });
}
