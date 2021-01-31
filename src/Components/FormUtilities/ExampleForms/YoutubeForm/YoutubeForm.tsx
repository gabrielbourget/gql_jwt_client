// -> Basic Formik form with manual validation.

import React from 'react';
import { css } from 'aphrodite';
import { useFormik, FormikValues } from 'formik';
import { styleGen } from './YoutubeFormStyles';

const initialValues = {
  name: '',
  email: '',
  channel: ''
};

const onSubmit = (values: FormikValues) => {
  console.log('form values upon submission -> ', values);
};

const validate = (values: FormikValues) => {
  let errors = {
    name: '',
    email: '',
    channel: '',
  };

  if(!values.name) errors.name = 'Name is required';
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(values.email)) {
    errors.email = 'Invalid email format';
  }
  if (!values.channel) errors.channel = 'Channel is required';

  return errors;
};

const YoutubeForm:React.FC = () => {
  const {
    formCradle, formControl, labelStyle, textOrEmailInput, error
  } = styleGen();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  const { values, touched, errors } = formik;

  return (
    <form className={css(formCradle)} onSubmit={formik.handleSubmit}>
      <div className={css(formControl)}>
        <label className={css(labelStyle)} htmlFor="name">Name</label>
        <input
          className={css(textOrEmailInput)}
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={values.name}
        />
        {
          (touched.name && errors.name) && <div className={css(error)}>{errors.name}</div>
        }
      </div>
      
      <div className={css(formControl)}>
        <label className={css(labelStyle)} htmlFor="email">Email</label>
        <input
          className={css(textOrEmailInput)}
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={values.email}
        />
        {
          (touched.email && errors.email) && <div className={css(error)}>{errors.email}</div>
        }
      </div>
      
      <div className={css(formControl)}>
        <label className={css(labelStyle)} htmlFor="channel">Channel</label>
        <input
          className={css(textOrEmailInput)}
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={values.channel}
        />
        {
          (touched.channel && errors.channel) && <div className={css(error)}>{errors.channel}</div>
        }
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default YoutubeForm;