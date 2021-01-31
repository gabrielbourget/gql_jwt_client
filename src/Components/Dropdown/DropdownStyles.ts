import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { IDropdownProps, borderRadiusConfig } from './helpers';
import { IDropdownState } from './stateManagement';

export const styleGen = (
  props: IDropdownProps,
  themeInfo: ThemeInfo,
  state: IDropdownState
) => {
  const {
    baseCradleHeight, baseCradleWidth, baseCradleBorder,
    dropCradleHeight, dropCradleWidth, minDropCradleHeight, maxDropCradleHeight,
    dropdownPadding, backgroundColor, dropCradleGap, shadow, 
    customBaseItemTextStyles, customDropdownItemTextStyles, maxDropCradleWidth,
    minDropCradleWidth, customBaseCradleStyles, customDropCradleStyles,
    dropCradleBorder, disabled, customDropdownCradleStyles, customDropdownItemCradleStyles,
    customDropdownItemInnerCradleStyles,
  } = props;
  const { palette, distance } = themeInfo;

  const computedDropdownPadding = dropdownPadding ? dropdownPadding : distance.one;
  const computedBackgroundColor = backgroundColor ? backgroundColor : palette.white;
  const computedBaseCradleBoxShadow = shadow ? shadow : themeInfo.shadows.one;
  const computedDropCradleBoxShadow = shadow ? shadow : themeInfo.shadows.one;
  const computedDropCradleBorder = dropCradleBorder ? dropCradleBorder : 'none';
  const computedMinDropCradleWidth = minDropCradleWidth ? minDropCradleWidth : baseCradleWidth;

  return StyleSheet.create({
    dropdownCradle: {
      position: 'relative', // -> To set the scene for and absolutely positioned elements.
      height: baseCradleHeight,
      width: baseCradleWidth,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // - TODO: -> Positioning calibration will affect this.
    },
    baseCradle: {
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: computedDropdownPadding,
      backgroundColor: computedBackgroundColor,
      border: (baseCradleBorder) ? baseCradleBorder : `1px solid ${palette.grey2}`,
      ':hover': {
        cursor: (disabled) ? 'default' : 'pointer',
      },
    },
    baseCradleRounded: {...borderRadiusConfig(props, themeInfo, state, {segment: 'basecradle'})},
    baseCradleRound: {...borderRadiusConfig(props, themeInfo, state, {segment: 'basecradle'})},
    baseCradleRaised: {boxShadow: computedBaseCradleBoxShadow},
    baseCradleDisabled: {opacity: 0.3},
    // - TODO: -> This is not doing the trick, want overflowing base item text not to wrap and to have an end ellipsis.
    staticBaseItemTextStyles: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    baseItemTextStyles : {
      fontFamily: themeInfo.fonts.primary,
      fontSize: '1.4rem',
      color: palette.black,
    },
    dropCradle: {
      zIndex: themeInfo.stackingIndexes.dropdownDropCradle,
      position: 'absolute',
      left: 0, right: 0,
      top: (baseCradleHeight && dropCradleGap) ? (baseCradleHeight + dropCradleGap) : 0, 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: computedDropdownPadding,
      backgroundColor: computedBackgroundColor,
      border: computedDropCradleBorder,
      height: (dropCradleHeight) ? dropCradleHeight : 'auto',
      width: (dropCradleWidth) ? dropCradleWidth : 'auto',
      minHeight: minDropCradleHeight,
      minWidth: computedMinDropCradleWidth,
      maxHeight: maxDropCradleHeight,
      maxWidth: maxDropCradleWidth,
      overflowY: 'scroll',
      overflowX: 'hidden',
    },
    dropCradleRounded: {...borderRadiusConfig(props, themeInfo, state, {segment: 'dropcradle'})},
    dropCradleRound: {...borderRadiusConfig(props, themeInfo, state, {segment: 'dropcradle'})},
    dropCradleRaised: {boxShadow: computedDropCradleBoxShadow},
    customDropdownCradleStyles: { ...customDropdownCradleStyles },
    customBaseCradleStyles: {...customBaseCradleStyles},
    customBaseItemTextStyles: {...customBaseItemTextStyles},
    customDropCradleStyles: {...customDropCradleStyles},
    customDropdownItemCradleStyles: { ...customDropdownItemCradleStyles },
    customDropdownItemInnerCradleStyles: { ...customDropdownItemInnerCradleStyles },
    customDropdownItemTextStyles: { ...customDropdownItemTextStyles },
  })
}
