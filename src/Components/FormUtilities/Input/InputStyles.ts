import { StyleSheet } from 'aphrodite';
import { ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
import { DEFAULT_FORM_CONTROL_WIDTH } from '../helpers';
import { IInputProps } from './helpers';
import { DISTANCE_COEFFICIENT } from '../../../StyleGuide/distanceTable';

export const styleGen = (props: IInputProps, themeInfo: ThemeInfo) => {
  const {
    height, width, customControlCradleHoverStyles,
    customControlCradleStyles, customLabelCradleStyles,
    customLabelTextStyles, customErrorCradleStyles,
    customErrorTextStyles, customInputCradleStyles,
    customInputTextStyles, rtl
  } = props;
  const { distance, palette, borderRadii, transitions } = themeInfo;

  return StyleSheet.create({
    formControlCradle: {
      height: height ? height: 'min-content',
      width: width ? width : DEFAULT_FORM_CONTROL_WIDTH,
      ':hover': { ...customControlCradleHoverStyles }
    },
    labelCradle: {
      display: 'flex',
      alignItmes: 'center',
      justifyContent: (rtl) ? 'flex-end' : 'flex-start',
    },
    labelText: {
      ...themeInfo.typography.default,
      margin: 0,
    },
    requiredElement: {
      color: themeInfo.palette.errorStatus,
    },
    inputCradle: {
      width: '100%',
      paddingTop: distance.one,
      paddingBottom: distance.one,
      paddingRight: DISTANCE_COEFFICIENT * 1.5,
      paddingLeft: DISTANCE_COEFFICIENT * 1.5,
      backgroundColor: palette.white,
      border: 'none' // -> Removes default inset border given to input HTML elements.
    },
    defaultBorderStyle: {
      border: `1px solid ${palette.grey2}`,
      transition: transitions.borderColorTransition,
      ':focus': {
        border: `1px solid ${palette.primary}`,
        outline: 'none',
      }
    },
    defaultUnderlineStyle: {
      borderBottom: `1.5px solid ${palette.black}`,
      transition: transitions.borderColorTransition,
      ':focus': {
        borderBottom: `1px solid ${palette.primary}`,
        outline: 'none',
      }
    },
    borderRounded: { borderRadius: borderRadii.one },
    borderRound: { borderRadius: 10000 },
    inputText: {
      ...themeInfo.typography.default,
      lineHeight: 1.43,
    },
    errorCradle: {
      display: 'flex',
      alignItmes: 'center',
      justifyContent: (rtl) ? 'flex-end' : 'flex-start',
    },
    errorText: {
      fontFamily: themeInfo.fonts.primary,
      color: palette.errorStatus,
      fontSize: '1.0rem',
    },
    customControlCradleStyles: { ...customControlCradleStyles },
    customLabelCradleStyles: { ...customLabelCradleStyles },
    customLabelTextStyles: { ...customLabelTextStyles },
    customInputCradleStyles: { ...customInputCradleStyles },
    customInputTextStyles: { ...customInputTextStyles },
    customErrorCradleStyles: { ...customErrorCradleStyles },
    customErrorTextStyles: { ...customErrorTextStyles }
  });
}
