import { css } from 'aphrodite';
import { ThemeInfo } from "../../../UI_InfoProvider/UI_InfoProvider";
import { ORTHOGONAL, ROUNDED, ROUND, COLOR } from '../../../../constants';

// - TODO: -> Weakness here, prefer string constants but had to use string literals.
export interface IDropdownItemProps {
  selected: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  item: any;
  onSelectItem?: any;
  height?: number;
  backgroundColor?: string;
  colorMode?: 'Color' | 'Greyscale';
  geometry?: 'orthogonal' | 'rounded' | 'round';
  hasSelectionIndicators?: boolean;
  showAllSelectionIndicators?: boolean;
  selectionIndicatorPosition?: 'left' | 'right';
  selectionIndicatorGeometry?: 'orthogonal' | 'rounded' | 'round';
  selectionIndicatorSize?: number;
  selectionIndicatorColor?: string
  showSelectionIndicatorIcon?: boolean;
  selectionIndicatorIcon?: any;
  selectionIndicatorLabelGap?: number;
  showInnerCradleUnderlay?: boolean;
  customDropdownItemCradleStyles?: any;
  customDropdownItemInnerCradleStyles?: any;
  customDropdownItemTextStyles?: any;
}

const determineInnerCradleGeometry = (props: IDropdownItemProps, styles: any) => {
  const { geometry } = props;
  let geometryStyle = null;

  switch(geometry) {
    case ORTHOGONAL: break;
    case ROUNDED: {
      geometryStyle = styles.innerCradleRounded;
      break;
    }
    case ROUND:
      geometryStyle = styles.innerCradleRound;
      break;
    default: break;
  }

  return geometryStyle;
}

export const calibrateComponent = (
  props: IDropdownItemProps,
  themeInfo: ThemeInfo,
  styles: any
) => {
  const {
    dropdownItemCradle, innerCradle, dropdownItemTextStyles, customDropdownItemCradleStyles,
    customDropdownItemInnerCradleStyles, customDropdownItemTextStyles
  } = styles;

  const innerCradleGeometryStyle = determineInnerCradleGeometry(props, styles);

  const dropdownCradleStylechain = css(dropdownItemCradle, customDropdownItemCradleStyles);
  const innerCradleStylechain = css(innerCradle, innerCradleGeometryStyle, customDropdownItemInnerCradleStyles);
  const dropdownItemTextStylechain = css(dropdownItemTextStyles, customDropdownItemTextStyles);

  return { dropdownCradleStylechain, innerCradleStylechain, dropdownItemTextStylechain };
}

export const determineIfShowingSelectionIndicator = (props: IDropdownItemProps): boolean => {
  const { hasSelectionIndicators, showAllSelectionIndicators, selected } = props;

  if (!hasSelectionIndicators) return false;
  if (!showAllSelectionIndicators && !selected) return false;
  return true;
}

export const determineInnerCradleBackgroundColor = (
  props: IDropdownItemProps,
  selected: boolean,
  themeInfo: ThemeInfo,
  options: any
): string => {
  const { colorMode, showInnerCradleUnderlay } = props;
  const { palette } = themeInfo;
  const { isInHoverState } = options;

  let computedColor = 'transparent';

  if ((selected || isInHoverState) && showInnerCradleUnderlay) {
    (colorMode === COLOR) ?
      computedColor = palette.tertiary : computedColor = palette.grey1;
  }

  return computedColor;
}

export const determineSelectionIndicatorColor = (
  props: IDropdownItemProps,
  themeInfo: ThemeInfo
): string => {
  const { colorMode, selectionIndicatorColor } = props;
  const { palette } = themeInfo;
  let computedSelectionIndicatorColor;

  if (!selectionIndicatorColor) {
    (colorMode === COLOR) ?
      computedSelectionIndicatorColor = palette.primary :
      computedSelectionIndicatorColor = palette.black;
  }
  else computedSelectionIndicatorColor = selectionIndicatorColor;

  return computedSelectionIndicatorColor;
};
