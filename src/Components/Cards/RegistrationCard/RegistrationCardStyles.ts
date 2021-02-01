import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../../Components/UI_InfoProvider/UI_InfoProvider';
import { IRegistrationCardProps, DEFAULT_CARD_WIDTH } from './helpers';

export const styleGen = (props: IRegistrationCardProps, themeInfo: ThemeInfo) => {
  return StyleSheet.create({
    cardCradle: {
      height: 'auto',
      width: DEFAULT_CARD_WIDTH,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      boxShadow: themeInfo.shadows.one,
      borderRadius: themeInfo.borderRadii.two,
    },
    topBarCradle: {
      height: 50,
      width: '100%',
      padding: themeInfo.distance.three,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: themeInfo.palette.primary,
      borderTopLeftRadius: themeInfo.borderRadii.one,
      borderTopRightRadius: themeInfo.borderRadii.one,
    },
    titleText: {
      ...themeInfo.typography.h3,
      color: themeInfo.palette.white,
    },
    cardBottomCradle: {
      height: '100%',
      width: '100%',
      padding: themeInfo.distance.three,
      display: 'flex',
      flex: 1,
    },
  })
}