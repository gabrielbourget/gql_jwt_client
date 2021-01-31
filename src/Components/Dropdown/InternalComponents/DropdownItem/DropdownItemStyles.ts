import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../../UI_InfoProvider/UI_InfoProvider';
import { IDropdownItemProps, determineInnerCradleBackgroundColor } from './helpers';
import { LEFT } from '../../../../constants';

export const styleGen = (
  props: IDropdownItemProps,
  themeInfo: ThemeInfo,
  selected: boolean
) => {
  const {
    height, selectionIndicatorPosition, customDropdownItemCradleStyles,
    customDropdownItemTextStyles
  } = props;
  const { palette, distance, borderRadii } = themeInfo;


  return StyleSheet.create({
    dropdownItemCradle: {
      width: 'auto',
      height,
    },
    innerCradle: {
      height: '100%',
      width: 'auto',
      paddingLeft: distance.one,
      paddingRight: distance.one,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: (selectionIndicatorPosition === LEFT) ? 'flex-start' : 'flex-end',
      alignItems: 'center',
      transition: themeInfo.transitions.bgColorTransition,
      backgroundColor:
        determineInnerCradleBackgroundColor(props, selected, themeInfo, { isInHoverState: false }),
      ':hover': {
        backgroundColor:
          determineInnerCradleBackgroundColor(props, selected, themeInfo, { isInHoverState: true }),
      },
    },
    innerCradleRounded: { borderRadius: borderRadii.one },
    innerCradleRound: { borderRadius: 10000 },
    selectionIndicatorCradle: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dropdownItemTextStyles: {
      fontFamily: themeInfo.fonts.priary,
      fontSize: '1.4rem',
      color: palette.black,
    },
    customDropdownItemCradleStyles: { ...customDropdownItemCradleStyles },
    customDropdownItemTextStyles: { ...customDropdownItemTextStyles },
  });
}
