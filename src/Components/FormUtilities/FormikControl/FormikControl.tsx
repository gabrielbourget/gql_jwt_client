// -> Beyond Codebase
import React, { useContext } from 'react';
import { ErrorMessage } from 'formik';
// -> Within Codebase
import { UIContext, ThemeInfo } from '../../UI_InfoProvider/UI_InfoProvider';
// -> Within Component
import { styleGen } from './FormikControlStyles';
import {
  INPUT_FORM_ELEMENT, TEXT_AREA_FORM_ELEMENT,
  SELECT_FORM_ELEMENT, RADIO_FORM_ELEMENT,
  CHECKBOX_FORM_ELEMENT, DATE_FORM_ELEMENT,
  IFormikControlProps, calibrateComponent,
  mapControlNameToComponent,
} from './helpers';

// - TODO: -> Consider enabling an active color for when a control is focused.
const FormikControl: React.FC<IFormikControlProps> = (props) => {
  const { control, label, name, ...rest } = props;
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext)
  const mappedControl = mapControlNameToComponent(control, {...rest});
  const styles = styleGen(props, themeInfo);
  const {
    formControlCradleStylechain, labelCradleStylechain,
    labelTextStylechain, errorCradleStylechain, errorTextStylechain
  } = calibrateComponent(props, styles);

  return (
    <div className={formControlCradleStylechain}>
      <label className={labelCradleStylechain} htmlFor="">
        <p className={labelTextStylechain}>{label}</p>
      </label>
      {mappedControl}
      <ErrorMessage
        name={name}
        render={(msg: string) => (
          <div className={errorCradleStylechain}>
            <p className={errorTextStylechain}>{msg}</p>
          </div>
        )}
      />
    </div>
  );
}

export default FormikControl;