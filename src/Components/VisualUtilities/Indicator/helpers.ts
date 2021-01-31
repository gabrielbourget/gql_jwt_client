import { css } from 'aphrodite';
import { ORTHOGONAL, ROUNDED, ROUND } from '../../../constants';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';

// - TODO: -> Weak code, prefer to use string constants, had to use string literals.
export interface IIndicatorProps {
  active: boolean;
  id?: string;
  toggleable?: boolean;
  size?: number;
  borderWidth?: number;
  geometry: 'round' | 'rounded' | 'orthogonal';
  color?: string;
  inactiveBackgroundColor?: string;
  backgroundColorTransition?: string;
  showActiveIcon?: boolean;
  activeIcon?: any;
  text?: string;
  onClick?: any;
  customIndicatorCradleStyles?: any;
  customIndicatorTextStyles?: any;
}

const determineIndicatorGeometryStyle = (props: IIndicatorProps, styles: any) => {
  const { geometry } = props;
  const { rounded, round } = styles;
  let geometryStyle;

  switch (geometry) {
    case ORTHOGONAL: break;
    case ROUNDED:
      geometryStyle = rounded;
      break;
    case ROUND:
      geometryStyle = round;
      break;
    default: break;
  }

  return geometryStyle;
}

export const calibrateComponent = (
  props: IIndicatorProps,
  themeInfo: ThemeInfo,
  active: boolean, 
  styles: any,
) => {
  const {
    indicatorCradle,
    indicatorText,
    indicatorCradleActive,
    customIndicatorCradleStyles,
    customIndicatorTextStyles
  } = styles;

  const indicatorGeometryStyle = determineIndicatorGeometryStyle(props, styles);
  const indicatorStatusStyle = active ? indicatorCradleActive : undefined;

  const indicatorCradleStylechain = css(
    indicatorCradle, indicatorGeometryStyle,
    indicatorStatusStyle, customIndicatorCradleStyles);

  const indicatorTextStylechain = css(indicatorText, customIndicatorTextStyles);

  return { indicatorCradleStylechain, indicatorTextStylechain };
}
