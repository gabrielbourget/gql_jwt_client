import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { IFormikControlProps, DEFAULT_FORM_CONTROL_WIDTH } from './helpers';

export const styleGen = (props: IFormikControlProps, themeInfo: ThemeInfo) => {
  const { palette, distance } = themeInfo;
  const {
    customControlCradleStyles, customLabelCradleStyles,
    customLabelTextStyles, customErrorCradleStyles,
    customErrorTextStyles, width, customControlCradleHoverStyles
  } = props;

  return StyleSheet.create({
    formControlCradle: {
      height: 'min-content',
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
