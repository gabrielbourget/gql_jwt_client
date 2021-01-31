import { ReactNode } from 'react';
import { css } from 'aphrodite';
import {
  ORTHOGONAL , ROUNDED, ROUND,
} from '../../constants';
import { ThemeInfo } from '../UI_InfoProvider/UI_InfoProvider';
import { IDropdownState, IDropdownItem } from './stateManagement';

const BASE_CRADLE = "Base Cradle";
const DROP_CRADLE = "Drop Cradle";

// - TODO: -> Weakness in the code, want to use string constants but have to use string literals.
export interface IDropdownProps {
  // -> General
  items?: IDropdownItem[],
  isOpen?: boolean;
  disabled?: boolean;
  onSelectItem: any;
  closeDropCradleOnSelect?: boolean;
  dropdownPadding?: number;
  openIcon?: any;
  closedIcon?: any;
  showBaseCradleIcon?: boolean;
  separator?: any;
  backgroundColor?: string;
  raised?: boolean;
  shadow?: string;
  geometry?: 'orthogonal' | 'rounded' | 'round';
  colorMode?: 'Color' | 'Greyscale';
  multiSelectMode?: boolean;
  selectionLimit?: number;
  baseItem?: any;
  CustomBaseCradleComponent?: ReactNode;
  CustomDropdownComponent?: ReactNode;
  // -> Selection indicators
  hasSelectionIndicators?: boolean;
  showAllSelectionIndicators?: boolean;
  selectionIndicatorPosition?: 'left' | 'right'
  selectionIndicatorGeometry?: 'orthogonal' | 'rounded' | 'round';
  selectionIndicatorSize?: number;
  selectionIndicatorColor?: string;
  showSelectionIndicatorIcon?: boolean;
  selectionIndicatorIcon?: any;
  selectionIndicatorLabelGap?: number;
  // -> Sizing and positioning and decoration
  baseCradleHeight?: number;
  baseCradleWidth?: number;
  baseCradleBorder?: string;
  dropCradleGap?: number;
  dropCradleBorder?: string;
  dropCradleHeight?: number;
  dropCradleWidth?: number;
  minDropCradleHeight?: number;
  minDropCradleWidth?: number;
  maxDropCradleHeight?: number;
  maxDropCradleWidth?: number;
  dropCradleAlignment?: 'left' | 'center' | 'right',
  // -> Dropdown item
  dropdownItemHeight?: number;
  dropdownItemGap?: number;
  showInnerCradleUnderlay?: boolean;
  // -> Custom styles
  customDropdownCradleStyles?: any;
  customBaseCradleStyles?: any;
  customBaseItemTextStyles?: any;
  customDropCradleStyles?: any;
  customDropdownItemCradleStyles?: any;
  customDropdownItemInnerCradleStyles?: any;
  customDropdownItemTextStyles?: any;
}

const determineDropdownGeometry = (props: IDropdownProps, styles: any) => {
  const { geometry } = props;
  const {
    baseCradleRounded, baseCradleRound,
    dropCradleRounded, dropCradleRound
  } = styles;
  let baseCradleGeometryStyle, dropCradleGeometryStyle;

  switch(geometry) { 
    case ORTHOGONAL: break;
    case ROUNDED:
      baseCradleGeometryStyle = baseCradleRounded;
      dropCradleGeometryStyle = dropCradleRounded;
      break;
    case ROUND:
      baseCradleGeometryStyle = baseCradleRound;
      dropCradleGeometryStyle = dropCradleRound;
      break;
    default: break;
  }

  return { baseCradleGeometryStyle, dropCradleGeometryStyle };
}

// - TODO: Figure this out for left, center, right align, as well as 
//         overrides for when drop cradle will fall out of viewport bounds.
// const computeDropCradleAlignment = (props: IDropdownProps, styles: any) => {
  // const { dropCradleAlignment } = props;
  // - TODO: -> Get information about:
  //           -> Viewport dimensions
  //           -> Start/End X, and overall width for drop cradle
  //         -> Figure out if width of dropdown cradle will overflow 
  //            horizontal bounds of viewport.
  //            -> Come up with positioning contingencies for both
  //               left and right overflows.
// }

export const calibrateComponent = (
  props: IDropdownProps,
  themeInfo: ThemeInfo,
  styles: any
) => {
  const { raised, disabled } = props;
  const {
    dropdownCradle, baseCradleRaised, baseCradleDisabled, baseCradle, staticBaseItemTextStyles,
    baseItemTextStyles, dropCradle, dropCradleRaised, customBaseCradleStyles,
    customBaseItemTextStyles, customDropCradleStyles, customDropdownCradleStyles
  } = styles;

  const {
    baseCradleGeometryStyle, dropCradleGeometryStyle
  } = determineDropdownGeometry(props, themeInfo);
  const baseCradleRaisedStyle = raised ? baseCradleRaised : undefined;
  const disabledStyle = disabled ? baseCradleDisabled : undefined;

  const dropdownCradleStylechain = css(dropdownCradle, customDropdownCradleStyles);

  const baseCradleStylechain = css(
    baseCradle, baseCradleGeometryStyle,
    baseCradleRaisedStyle, disabledStyle, customBaseCradleStyles
  );
  const baseItemTextStylechain = css(staticBaseItemTextStyles, baseItemTextStyles, customBaseItemTextStyles);
  const dropCradleStylechain = css(dropCradle, dropCradleGeometryStyle, dropCradleRaised, customDropCradleStyles);

  return {
    dropdownCradleStylechain, baseCradleStylechain,
    baseItemTextStylechain, dropCradleStylechain
  };
}

export const determineDropdownItemGap = (props: IDropdownProps, themeInfo: ThemeInfo) => {
  const {dropdownItemGap} = props;

  if (dropdownItemGap) return dropdownItemGap;
  else return themeInfo.distance.one;
}

// - TODO: -> Debug this function, it's not working properly.
export const borderRadiusConfig = (
  props: IDropdownProps,
  themeInfo: ThemeInfo,
  state: IDropdownState,
  options: any
) => {
  const { dropCradleGap, geometry } = props;
  const { isOpen } = state;
  let {segment} = options;
  if (segment) segment = segment.toLowerCase().trim();

  let borderTopLeftRadius = null;
  let borderTopRightRadius = null;
  let borderBottomRightRadius = null;
  let borderBottomLeftRadius = null;

  if (!isOpen) {
    if (geometry === ROUNDED) {
      borderTopLeftRadius = themeInfo.borderRadii.one;
      borderTopRightRadius = themeInfo.borderRadii.one;
      borderBottomRightRadius = themeInfo.borderRadii.one;
      borderBottomLeftRadius = themeInfo.borderRadii.one;
    }
    else if (geometry === ROUND) {
      borderTopLeftRadius = 1000;
      borderTopRightRadius = 1000;
      borderBottomRightRadius = 1000;
      borderBottomLeftRadius = 1000;
    }
  }
  else {
    if (segment === BASE_CRADLE) {
      if (geometry === ROUNDED) {
        borderTopLeftRadius = themeInfo.borderRadii.one;
        borderTopRightRadius = themeInfo.borderRadii.one;
        borderBottomRightRadius = (dropCradleGap === 0) ? 0 : themeInfo.borderRadii.one;
        borderBottomLeftRadius = (dropCradleGap === 0) ? 0 : themeInfo.borderRadii.one;
      }
      else if (geometry === ROUND) {
        borderTopLeftRadius = 1000;
        borderTopRightRadius = 1000;
        borderBottomRightRadius = (dropCradleGap === 0) ? 0 : 1000;
        borderBottomLeftRadius = (dropCradleGap === 0) ? 0 : 1000;
      }
    }
    else if (segment === DROP_CRADLE) {
      if (geometry === ROUNDED) {
        borderTopLeftRadius = (dropCradleGap === 0) ? 0 : themeInfo.borderRadii.one;
        borderTopRightRadius = (dropCradleGap === 0) ? 0 : themeInfo.borderRadii.one;
        borderBottomRightRadius = themeInfo.borderRadii.one;
        borderBottomLeftRadius = themeInfo.borderRadii.one;
      }
      else if (geometry === ROUND) {
        borderTopLeftRadius = (dropCradleGap === 0) ? 0 : themeInfo.borderRadii.one;
        borderTopRightRadius = (dropCradleGap === 0) ? 0 : themeInfo.borderRadii.one;
        borderBottomRightRadius = themeInfo.borderRadii.one;
        borderBottomLeftRadius = themeInfo.borderRadii.one;
      }
    }
  }

  return {
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
  };
}

export const determineBaseItemLabel = (props: IDropdownProps, state: IDropdownState) => {
  const { baseItem, multiSelectMode } = props;
  const { selectedItems } = state;
  let payload = null;

  // -> No base item provided and no items are selected
  if (!baseItem && (selectedItems.length === 0)) {
    payload = '--';
  }
  // -> Base item provided and no items are selected
  if (baseItem && (selectedItems.length === 0)) {
    payload = baseItem.label;
  }
  // -> At least one element is selected, default to showing the first one
  if (selectedItems.length > 0) {
    payload = selectedItems[0].label;
    // -> More than one element is selected
    if (multiSelectMode && (selectedItems.length > 1)) {
      payload = `${selectedItems[0].label} +${(selectedItems.length - 1)}`
    }
  }

  return payload;
}
