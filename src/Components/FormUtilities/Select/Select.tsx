import React from 'react';
import { css } from 'aphrodite';
import { Field, ErrorMessage } from 'formik';
import { styleGen } from './SelectStyles';

interface ISelectOption {
  key: string;
  value: string;
}

interface ISelectProps {
  label: string;
  name: string;
  options: ISelectOption[];
  // options: any;
}

const Select: React.FC<ISelectProps | any> = (props) => {
  const { label, name, options, ...rest } = props;
  const { formField } = styleGen();

  return (
    <Field
      className={css(formField)}
      id={name}
      name={name}
      as="select"
      {...rest}
    >
      {
        options.map((option: any) => {
          return (
            <option
              key={option.value}
              value={option.value}
            >
              {option.key}
            </option>
          );
        })
      }
    </Field>
  );
}

export default Select;