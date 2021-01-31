import React from 'react';
import { css } from 'aphrodite';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select';
import RadioGroup from '../RadioGroup/RadioGroup';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import DatePicker from '../DatePicker/DatePicker';

export const INPUT_FORM_ELEMENT = "input";
export const TEXT_AREA_FORM_ELEMENT = "textarea";
export const SELECT_FORM_ELEMENT = "select";
export const RADIO_FORM_ELEMENT = "radio";
export const CHECKBOX_FORM_ELEMENT = "checkbox";
export const DATE_FORM_ELEMENT = "date";

export const DEFAULT_FORM_CONTROL_WIDTH = 150;

interface ISelectOption {
  key: string,
  value: string,
}

export interface IFormikControlProps {
  height?: number;
  width?: number;
  label: string;
  name: string;
  type?: string;
  options?: ISelectOption[];
  control: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date';
  customControlCradleStyles?: any;
  customControlCradleHoverStyles?: any;
  customLabelCradleStyles?: any;
  customLabelTextStyles?: any;
  customErrorCradleStyles?: any;
  customErrorTextStyles?: any;
  // -> Props beyond this point are passed down to individual form
  //    component wrappers depending on the control that the developer
  //    is using.
  customInputCradleStyles?: any;
  customInputTextStyles?: any;
  customTextAreaCradleStyles?: any;
  customTextAreaTextStyles?: any;
  customSelectCradleStyles?: any;
  customSelectOptionCradleStyles?: any;
  customSelectOptionTextStyles?: any;
  customRadioGroupOptionCradleStyles?: any;
  customRadioButtonCradleStyles?: any;
  customRadioButtonLabelCradleStyles?: any;
  customRadioButtonLabelTextStyles?: any;
  customCheckboxGroupOptionCradleStyles?: any;
  customCheckboxCradleStyles?: any;
  customCheckboxLabelCradleStyles?: any;
  customCheckboxLabelTextStyles?: any;
  // - TODO: -> Look into react-datepicker documentation to see what
  //            kind of styling customizations can be passed down to
  //            the component.
}

export const mapControlNameToComponent = (control: string, remainingProps: any) => {
  let mappedControl;

  switch (control) {
    case INPUT_FORM_ELEMENT:
      mappedControl = <Input {...remainingProps} />;
      break;
    case TEXT_AREA_FORM_ELEMENT:
      mappedControl = <TextArea {...remainingProps} />;
      break;
    case SELECT_FORM_ELEMENT:
      mappedControl = <Select {...remainingProps} />;
      break;
    case RADIO_FORM_ELEMENT:
      mappedControl = <RadioGroup {...remainingProps} />
      break;
    case CHECKBOX_FORM_ELEMENT:
      mappedControl = <CheckboxGroup {...remainingProps} />
      break;
    case DATE_FORM_ELEMENT:
      mappedControl = <DatePicker {...remainingProps} />
      break;
    default:
      console.error("[FormikControl]: That is not a valid form control type.");
      return null;
  }

  return mappedControl;
}

export const calibrateComponent = (props: IFormikControlProps, styles: any) => {
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