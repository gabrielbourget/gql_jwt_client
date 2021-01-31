import React from 'react';
import { css } from 'aphrodite';
import { Field, ErrorMessage } from 'formik';
import { styleGen } from './TextAreaStyles';

interface ITextAreaProps {
  label: string;
  name: string;
}

const TextArea: React.FC<ITextAreaProps | any> = (props) => {
  const { label, name, ...rest } = props;
  const { formField } = styleGen();

  return (
    <Field
      className={css(formField)}
      id={name}
      name={name}
      as="textarea"
      {...rest}
    />
  );
}

export default TextArea;