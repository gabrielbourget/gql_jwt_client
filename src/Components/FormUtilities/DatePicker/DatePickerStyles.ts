import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { DEFAULT_FORM_CONTROL_WIDTH } from '../helpers';
import { IDatePickerProps } from './helpers';

export const styleGen = (props: IDatePickerProps, themeInfo: ThemeInfo) => {
  const { distance } = themeInfo;
  const {
    customControlCradleStyles, customLabelCradleStyles,
    customLabelTextStyles, customErrorCradleStyles,
    customErrorTextStyles, width, customControlCradleHoverStyles,
    height
  } = props;

  return StyleSheet.create({
    formControlCradle: {
      height: height ? height : 'min-content',
      width: width ? width : DEFAULT_FORM_CONTROL_WIDTH,
      paddingTop: distance.one,
      paddingBottom: distance.one,
      paddingLeft: distance.two,
      paddingRight: distance.two,
      ':hover': { ...customControlCradleHoverStyles }
    },
    labelCradle: {

    },
    labelText: {
      ...themeInfo.typography.default,
    },
    errorCradle: {
      marginTop: 5,
    },
    errorText: {
      color: 'red',
    },
    customControlCradleStyles: { ...customControlCradleStyles },
    customLabelCradleStyles: { ...customLabelCradleStyles },
    customLabelTextStyles: { ...customLabelTextStyles },
    customErrorCradleStyles: { ...customErrorCradleStyles },
    customErrorTextStyles: { ...customErrorTextStyles }
  });
}