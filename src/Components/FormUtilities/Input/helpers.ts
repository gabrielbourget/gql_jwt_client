import { css } from 'aphrodite';
import { ORTHOGONAL, ROUNDED, ROUND, BORDER } from '../../../constants';

export interface IInputProps {
  height?: number;
  width?: number | string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  type?: string;
  rtl?: boolean;
  mode?: 'underline' | 'border';
  borderGeometry?: 'orthogonal' | 'rounded' | 'round';
  showLabel?: boolean;
  showErrorMessage?: boolean;
  customControlCradleStyles?: any;
  customControlCradleHoverStyles?: any;
  customLabelCradleStyles?: any;
  customLabelTextStyles?: any;
  customInputCradleStyles?: any;
  customInputTextStyles?: any;
  customErrorCradleStyles?: any;
  customErrorTextStyles?: any;
}

const determineInputBorderGeometry = (borderGeometry: string | undefined, styles: any) => {
  const { borderRounded, borderRound } = styles;
  let borderGeometryStyle;

  switch (borderGeometry) {
    case ORTHOGONAL: break;
    case ROUNDED:
      borderGeometryStyle = borderRounded;
      break;
    case ROUND:
      borderGeometryStyle = borderRound;
      break;
    default:
      borderGeometryStyle = borderRounded;
      break;
  }

  return borderGeometryStyle;
}

export const calibrateComponent = (props: IInputProps, styles: any) => {
  const { borderGeometry, mode } = props;
  const {
    customControlCradleStyles, customLabelCradleStyles,
    customLabelTextStyles, customErrorCradleStyles,
    customErrorTextStyles, formControlCradle, labelCradle,
    labelText, errorCradle, errorText, customControlCradleHoverStyles,
    customInputCradleStyles, customInputTextStyles, inputCradle, inputText,
    defaultBorderStyle, defaultUnderlineStyle,
  } = styles;

  const inputThemeStyle = (mode === BORDER) ? defaultBorderStyle : defaultUnderlineStyle;
  const borderStyle = determineInputBorderGeometry(borderGeometry, styles);
  const conditionalBorderStyle = (mode === BORDER) ? borderStyle : undefined;

  const formControlCradleStylechain = css(
    formControlCradle, customControlCradleStyles, customControlCradleHoverStyles
  );
  const labelCradleStylechain = css(labelCradle, customLabelCradleStyles);
  const labelTextStylechain = css(labelText, customLabelTextStyles);
  const inputStylechain = css(
    inputCradle, inputText, conditionalBorderStyle, inputThemeStyle,
    customInputCradleStyles, customInputTextStyles, 
  );
  const errorCradleStylechain = css(errorCradle, customErrorCradleStyles);
  const errorTextStylechain = css(errorText, customErrorTextStyles);

  return {
    formControlCradleStylechain, labelCradleStylechain,
    labelTextStylechain, inputStylechain,
    errorCradleStylechain, errorTextStylechain
  };
}
