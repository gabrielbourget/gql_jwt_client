import { css } from 'aphrodite';

export interface IDatePickerProps {
  height?: number;
  width?: number;
  label?: string;
  name: string;
  showLabel?: boolean;
  showErrorMessage?: boolean;
  customControlCradleStyles?: any;
  customControlCradleHoverStyles?: any;
  customLabelCradleStyles?: any;
  customLabelTextStyles?: any;
  // - TODO: -> See if with React Datepicker, there are custom styles that can
  //            be passed down as props to it. If so, accept these as props on the
  //            wrapper component here.
  customErrorCradleStyles?: any;
  customErrorTextStyles?: any;
}

export const calibrateComponent = (props: IDatePickerProps, styles: any) => {

  const {
    customControlCradleStyles, customLabelCradleStyles,
    customLabelTextStyles, customErrorCradleStyles,
    customErrorTextStyles, formControlCradle, labelCradle,
    labelText, errorCradle, errorText, customControlCradleHoverStyles,
  } = styles;

  const formControlCradleStylechain = css(
    formControlCradle, customControlCradleStyles, customControlCradleHoverStyles
  );
  const labelCradleStylechain = css(labelCradle, customLabelCradleStyles);
  const labelTextStylechain = css(labelText, customLabelTextStyles);
  const errorCradleStylechain = css(errorCradle, customErrorCradleStyles);
  const errorTextStylechain = css(errorText, customErrorTextStyles);

  return {
    formControlCradleStylechain, labelCradleStylechain,
    labelTextStylechain, errorCradleStylechain, errorTextStylechain
  };
}
