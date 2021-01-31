import React from 'react';
import { css } from 'aphrodite';
import { Field, ErrorMessage } from 'formik';
import { styleGen } from './CheckboxGroupStyles';

interface ICheckboxGroupOption {
  key: string;
  value: string;
}

interface ICheckboxGroupProps {
  label: string;
  name: string;
  options: ICheckboxGroupOption[];
}

// - TODO: -> Create ability to span out options horizontally as an alternative to vertically.
// - TODO: -> Styling work so that many options cascade well.

const CheckboxGroup: React.FC<ICheckboxGroupProps | any> = (props) => {
  const { label, name, options, ...rest } = props;
  const { formField } = styleGen();

  return (
    <div></div>
    // <Field
    //   className={css(formField)}
    //   name={name}
    //   {...rest}
    // >
    //   {
    //     ({ field }: { field: any }) => {    
    //       return options.map((option: ICheckboxGroupOption) => {
    //         console.log('field -> ', field);
    //         console.log('field value -> ', field.value);
    //         return (
    //           <React.Fragment key={option.key}>
    //             <input
    //               type="checkbox"
    //               id={option.value}
    //               {...field}
    //               value={option.value}
    //               checked={field.value.includes(option.value)}
    //             />
    //             <label htmlFor={option.value}>{option.key}</label>
    //           </React.Fragment>
    //         );
    //       });
    //     }
    //   }
    // </Field>
  );
}

export default CheckboxGroup;