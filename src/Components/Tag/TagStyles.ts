import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { ITagProps } from './helpers';

export const styleGen = (props: ITagProps, themeInfo: ThemeInfo) => {
  const {
    activeColor, activeBorder, activeTextColor,
    inactiveColor, inactiveBorder, inactiveTextColor,
    toggleable, removeable, hoverCursor, backgroundColorTransition,
    customCradleStyles, customTextStyles,
  } = props;
  const { palette } = themeInfo;

  const computedActiveBGColor = activeColor ? activeColor : palette.primary;
  const computedInactiveBGColor = inactiveColor ? inactiveColor : palette.white;
  const computedActiveBorder = activeBorder ? activeBorder : 'none';
  const computedInactiveBorder = inactiveBorder ? inactiveBorder: `1px solid ${palette.grey2}`;
  const computedActiveTextColor = activeTextColor ? activeTextColor : palette.white;
  const computedInactiveTextColor = inactiveTextColor ? inactiveTextColor : palette.black;
  // - TODO: -> Not working, figure this out.
  let computedCursor = ((toggleable || removeable) && (hoverCursor)) ? hoverCursor : 'auto';

  return StyleSheet.create({
    tagCradle: {
      height: 'min-content',
      width: 'min-content',
      whiteSpace: 'nowrap',
      paddingLeft: themeInfo.distance.two,
      paddingRight: themeInfo.distance.two,
      paddingTop: themeInfo.distance.one,
      paddingBottom: themeInfo.distance.one,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      transition: backgroundColorTransition,
      ':hover': { cursor: computedCursor }
    },
    tagCradleRounded: { borderRadius: themeInfo.borderRadii.one },
    tagCradleRound: { borderRadius: 10000 },
    tagCradleActive: {
      border: computedActiveBorder,
      backgroundColor: computedActiveBGColor
    },
    tagCradleInactive: {
      border: computedInactiveBorder,
      backgroundColor: computedInactiveBGColor
    },
    tagText: {
      width: 'auto',
      fontFamily: themeInfo.fonts.primary,
      fontSize: '1.2rem',
    },
    tagTextActive: { color: computedActiveTextColor },
    tagTextInactive: { color: computedInactiveTextColor },
    customCradleStyles: { ...customCradleStyles },
    customTextStyles: { ...customTextStyles },
  });
}
