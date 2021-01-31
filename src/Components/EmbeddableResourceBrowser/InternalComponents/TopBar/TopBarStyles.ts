import { StyleSheet } from 'aphrodite';
import { ITopBarProps } from './helpers';
import { ThemeInfo } from '../../../UI_InfoProvider/UI_InfoProvider';

export const styleGen = (props: ITopBarProps, themeInfo: ThemeInfo) => {

  // - TODO: -> Width transition is not triggering :/
  const computedTransition = `
    ${themeInfo.transitions.bgColorTransition},
    width 3s ease-in-out
  `;

  return StyleSheet.create({
    sectionTitle: { ...themeInfo.typography.sectionTitle },
    titleBarCradle: {
      height: 'min-content',
      width: '100%',
      paddingBottom: themeInfo.distance.one,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleBarButtonRow: {
      height: '100%',
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    additionalOptionsButtonRow: {
      height: '100%',
      width: 'min-content',
      padding: themeInfo.distance.one,
      display: 'flex',
      alignItems: 'center',
      borderRadius: themeInfo.borderRadii.one,
      backgroundColor: themeInfo.palette.white,
      transition: computedTransition
    },
    additionalOptionsButtonRowOpen: {
      backgroundColor: themeInfo.palette.grey1,
    }
  });
}
