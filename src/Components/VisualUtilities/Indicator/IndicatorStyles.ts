import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { IIndicatorProps } from './helpers';

export const styleGen = (props: IIndicatorProps, themeInfo: ThemeInfo) => {
  const {
    borderWidth, size, inactiveBackgroundColor, toggleable,
    backgroundColorTransition, customIndicatorCradleStyles,
    customIndicatorTextStyles, color
  } = props;
  const { palette } = themeInfo;

  const computedActiveColor = color ? color : palette.primary;
  const computedBorder = `${borderWidth}px solid ${color}`;

  return StyleSheet.create({
    indicatorCradle: {
      height: size,
      width: size,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: computedBorder,
      backgroundColor: inactiveBackgroundColor,
      transition: backgroundColorTransition,
      opacity: toggleable ? 1.0 : themeInfo.styles.disabledOpacity,
      ':hover': { cursor: 'pointer' }
    },
    indicatorCradleRounded: { borderRadius: themeInfo.borderRadii.one },
    indicatorCradleRound: { borderRadius: 10000 },
    indicatorCradleActive: { backgroundColor: computedActiveColor },
    indicatorText: { ...themeInfo.typography.default },
    customIndicatorCradleStyles: { ...customIndicatorCradleStyles },
    customIndicatorTextStyles: { ...customIndicatorTextStyles }
  });
}
