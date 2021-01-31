import {css} from 'aphrodite';
import { ReactNode } from 'react';
import {
  PRIMARY, SECONDARY, TERTIARY, QUATERNARY,
  QUINTENARY, ORTHOGONAL, ROUNDED, ROUND
} from '../../constants';

// - TODO: -> Weakness here, had to use hard coded strings instead of
//            referring to the string constant variables. Find a way
//            to refer directly to the variables.
export interface IButtonProps {
  height?: number | string;
  width?: number | string;
  buttonCradlePadding?: string | number;
  buttonGeometry?: "orthogonal" | "rounded" | "round";
  buttonOrder?: "primary" | "secondary" | "tertiary" | "quaternary" |  "quintenary";
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  textColor?: string;
  transparent?: boolean;
  stretch?: boolean;
  disabled?: boolean;
  focusOutline?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  iconTextSpacing?: number;
  buttonText?: string;
  buttonTextType?: string; // -> For when there are typography presets to refer to.
  customCradleStyles?: any;
  customCradleHoverStyles?: any;
  customIconCradleStyles?: any;
  customTextStyles?: any;
  onClick?: any;
  onFocus?(): void;
  onBlur?(): void;
  onKeyPress?(event: React.KeyboardEvent<HTMLButtonElement>): void;
  onKeyUp?(event: React.KeyboardEvent<HTMLButtonElement>): void;
  onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>): void;
  onMouseEnter?(): void;
  onTouchStart?(): void;
}

const determineButtonCradleBackgroundColor = (props: IButtonProps, styles: any) => {
  const {transparent} = props;
  let {buttonOrder, color} = props;
  if (color) color = color.toLowerCase().trim();

  let backgroundColorStyle;

  if (transparent) {
    backgroundColorStyle = styles.buttonCradleTransparent;
    return backgroundColorStyle;
  }

  if (color) {
    backgroundColorStyle = styles.buttonCradleCustomColor;
    return backgroundColorStyle;
  }

  switch (buttonOrder) {
    case PRIMARY:
      backgroundColorStyle = styles.buttonCradlePrimary;
      break;
    case SECONDARY:
      backgroundColorStyle = styles.buttonCradleSecondary;
      break;
    case TERTIARY:
      backgroundColorStyle = styles.buttonCradleTertiary;
      break;
    case QUATERNARY:
      backgroundColorStyle = styles.buttonCradleQuaternary;
      break;
    case QUINTENARY:
      backgroundColorStyle = styles.buttonCradleQuintenary;
      break;
    default:
      backgroundColorStyle = styles.buttonCradlePrimary;
      break;
  }

  return backgroundColorStyle;
};

// - TODO: -> Figure out a way to flexibly calibrate text color to a four-color
//            color scheme. Goal is to have enough contrast between cradle color
//            and text color to be able to read. Ultimately, some of the responsibility
//            for this will have to sit with the graphic design of the overall project.
// const determineButtonTextColor = (props) => {
//
// }

const determineIfMaintainingAspectRatio = (props: IButtonProps) => {
  const {icon, buttonText} = props;
  if ((icon) && (!buttonText)) return true;
  return false;
};

const determineButtonGeometryStyle = (props: IButtonProps, styles: any) => {
  let {buttonGeometry} = props;

  switch (buttonGeometry) {
    case ORTHOGONAL:
      return null;
    case ROUNDED:
      return styles.buttonCradleRounded;
    case ROUND:
      return styles.buttonCradleRound;
    default:
      return null; // -> Default to orthogonal corners, change if desired.
  }
};

export const calibrateComponent = (props: IButtonProps, styles: any) => {

  // -> Computed styles
  const backgroundColorStyle = determineButtonCradleBackgroundColor(props, styles);
  const aspectRatioStyle = (determineIfMaintainingAspectRatio(props)) ? styles.buttonCradleAspectRatio : null;
  const buttonGeometryStyle = determineButtonGeometryStyle(props, styles);

  // -> Stylechains
  const buttonCradleStylechain = css(
    styles.buttonCradle,
    aspectRatioStyle, buttonGeometryStyle,
    backgroundColorStyle, styles.customCradleStyles,
  );
  const iconCradleStylechain = css(styles.iconCradle, styles.customIconCradleStyles);
  const textStylechain = css(styles.buttonText, styles.customTextStyles);

  return {buttonCradleStylechain, iconCradleStylechain, textStylechain};
};

export default calibrateComponent;