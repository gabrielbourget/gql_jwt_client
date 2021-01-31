// -> Beyond Codebase
import React, { useContext } from 'react';
import { Field, ErrorMessage } from 'formik';
import { css } from "aphrodite";
// -> Within Codebase
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
// -> Within Component
import { styleGen } from './InputStyles';
import { IInputProps, calibrateComponent } from './helpers';

const Input: React.FC<IInputProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { label, name, rtl, required, ...rest } = props;
  let { showLabel, showErrorMessage } = props;

  if (!showLabel) showLabel = true;
  if (!showErrorMessage) showErrorMessage = true;

  // -> Running this twice because I want the overall style object, but then
  //    also one specific style from it at the same time.
  const styles = styleGen(props, themeInfo);
  const { requiredElement } = styleGen(props, themeInfo);
  const {
    formControlCradleStylechain, labelCradleStylechain,
    labelTextStylechain, inputStylechain,
    errorCradleStylechain, errorTextStylechain
  } = calibrateComponent(props, styles);

  const rtlStatus = (rtl) ? "rtl" : undefined;

  return (
    <div className={formControlCradleStylechain}>
      {
        (showLabel && label) && (
          <>
            <div className={labelCradleStylechain}>
              <p className={labelTextStylechain}>{label}</p>
              {
                (required) && (
                  <>
                    <div style={{ marginRight: 3.5}}></div>
                    <p className={css(requiredElement)}>*</p>
                  </>
                )
              }
            </div>
            <div style={{ marginTop: themeInfo.distance.one }}></div>
          </>
        )
      }
      <Field
        className={inputStylechain}
        id={name}
        name={name}
        dir={rtlStatus}
        {...rest}
      />
      {
        (showErrorMessage) && (
          <>
            <div style={{ marginTop: themeInfo.distance.one }}></div>
            <ErrorMessage
              name={name}
              render={(msg: string) => (
                <div className={errorCradleStylechain}>
                  <p className={errorTextStylechain}>{msg}</p>
                </div>
              )}
            />
          </>
        )
      }
    </div>
  );
}

export default Input;
