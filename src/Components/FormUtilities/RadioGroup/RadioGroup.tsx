import React from 'react';
import { css } from 'aphrodite';
import { Field, ErrorMessage } from 'formik';
import { styleGen } from './RadioGroupStyles';

interface IRadioGroupOption {
  key: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: IRadioGroupOption[];
}

// - TODO: -> Create ability to span out options horizontally as an alternative to vertically.
// - TODO: -> Styling work so that many options cascade well.

const RadioGroup: React.FC<RadioGroupProps | any> = (props) => {
  const { label, name, options, ...rest } = props;
  const { formField } = styleGen();

  return (
    <Field
      className={css(formField)}
      name={name}
      {...rest}
    >
      {
        ({ field }: { field: any }) => {
          
          return options.map((option: IRadioGroupOption) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }
      }
    </Field>
  );
}

export default RadioGroup;
