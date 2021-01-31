// -> Beyond Codebase
import { ReactNode } from 'react';
import { css } from 'aphrodite';
// -> Within Codebase
import { ThemeInfo } from '../../../../../UI_InfoProvider/UI_InfoProvider';
import { ORTHOGONAL, ROUNDED, ROUND } from '../../../../../../constants';

// - TODO: -> Address weakness of having to use string literals here instead of modularized string constants.
export interface IResourceListItemProps {
  height?: number;
  iconColumnWidth?: number;
  nameColumnWidth?: number;
  icon?: ReactNode;
  name?: string;
  types?: string[];
  listItemCradleGeometry?: 'round' | 'rounded' | 'orthogonal';
  innerCradleGeometry?: 'round' | 'rounded' | 'orthogonal';
  customListItemCradleStyles?: any;
  customListItemCradleHoverStyles?: any;
  customInnerCradleStyles?: any;
  customInnerCradleHoverStyles?: any;
  customIconColumnCradleStyles?: any;
  customNameColumnCradleStyles?: any;
  customNameColumnTextStyles?: any;
  customTypesColumnCradleStyles?: any;
  onClick(): void;
}

const LIST_ITEM_CRADLE = "LIST ITEM CRADLE";
const INNER_CRADLE = "INNER CRADLE";

const determineCradleGeometry = (cradleType: string, requestedGeometry: string = ORTHOGONAL, styles: any) => {
  let cradleStyle;
  const {
    listItemCradleRounded, listItemCradleRound,
    innerCradleRounded, innerCradleRound
  } = styles;

  switch(requestedGeometry) {
    case ORTHOGONAL: break;
    case ROUNDED:
      if (cradleType === LIST_ITEM_CRADLE) {
        cradleStyle = listItemCradleRounded;
      } else if (cradleType === INNER_CRADLE) {
        cradleStyle = innerCradleRounded;
      }
      break;
    case ROUND:
      if (cradleType === LIST_ITEM_CRADLE) {
        cradleStyle = listItemCradleRound;
      } else if (cradleType === INNER_CRADLE) {
        cradleStyle = innerCradleRound;
      }
      break;
    default: break;
  }

  return cradleStyle;
}

export const calibrateComponent = (
  props: IResourceListItemProps,
  themeInfo: ThemeInfo,
  styles: any,
) => {
  const {
    listItemCradleGeometry, innerCradleGeometry
  } = props;
  const {
    listItemCradle, innerCradle, iconColumnCradle, nameColumnCradle, nameColumnText,
    typesColumnCradle, customListItemCradleStyles, customInnerCradleStyles, customIconColumnCradleStyles,
    customNameColumnCradleStyles, customNameColumnTextStyles, customTypesColumnCradleStyles
  } = styles;

  const listItemCradleGeometryStyle = determineCradleGeometry(LIST_ITEM_CRADLE, listItemCradleGeometry, styles);
  const innerCradleGeometryStyle = determineCradleGeometry(INNER_CRADLE, innerCradleGeometry, styles);
    
  const listItemCradleStylechain = css(listItemCradle, listItemCradleGeometryStyle, customListItemCradleStyles);
  const innerCradleStylechain = css(innerCradle, innerCradleGeometryStyle, customInnerCradleStyles);
  const iconColumnCradleStylechain = css(iconColumnCradle, customIconColumnCradleStyles);
  const nameColumnCradleStylechain = css(nameColumnCradle, customNameColumnCradleStyles);
  const nameColumnTextStylechain = css(nameColumnText, customNameColumnTextStyles);
  const typesColumnCradleStylechain = css(typesColumnCradle, customTypesColumnCradleStyles);

  return {
    listItemCradleStylechain, innerCradleStylechain,
    iconColumnCradleStylechain, nameColumnCradleStylechain,
    nameColumnTextStylechain, typesColumnCradleStylechain
  };
}