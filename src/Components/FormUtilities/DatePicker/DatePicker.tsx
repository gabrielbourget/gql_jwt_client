// -> Beyond Codebase
import React, { useContext } from 'react';
import { Field, ErrorMessage } from 'formik';
import DatePickerComponent from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// -> Within Codebase
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
// -> Within Component
import { IDatePickerProps, calibrateComponent } from './helpers';
import { styleGen } from './DatePickerStyles';

const DatePicker: React.FC<IDatePickerProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { label, name, ...rest } = props;
  let { showLabel, showErrorMessage } = props;

  if (!showLabel) showLabel = true;
  if (!showErrorMessage) showErrorMessage = true;

  const styles = styleGen(props, themeInfo);
  const {
    formControlCradleStylechain, labelCradleStylechain,
    labelTextStylechain, errorCradleStylechain, errorTextStylechain
  } = calibrateComponent(props, styles);

  return (
    <div className={formControlCradleStylechain}>
      {
        (showLabel && label) && (
          <>
            <label className={labelCradleStylechain} htmlFor="">
              <p className={labelTextStylechain}>{label}</p>
            </label>
            <div style={{ marginTop: themeInfo.distance.one }}></div>
          </>
        )
      }
      <Field name={name}>
        {
          ({ field, form }: { field: any, form: any }) => {
            const { setFieldValue } = form;
            const { value } = field;

            return (
              <DatePickerComponent
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={(changedValue) => setFieldValue(name, changedValue)}
              />
            );
          }
        }
      </Field>
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

export default DatePicker;
