// -> Basic Formik form with Yup validation schema.

import React from 'react';
import { css } from 'aphrodite';
import { useFormik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { styleGen } from './YoutubeFormv2Styles';

const initialValues = {
  name: '',
  email: '',
  channel: ''
};

const onSubmit = (values: FormikValues) => {
  console.log('form values upon submission -> ', values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  channel: Yup.string().required('Channel is required')
});

const YoutubeFormv2:React.FC = () => {
  const {
    formCradle, formControl, labelStyle, textOrEmailInput, error
  } = styleGen();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
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
          {...formik.getFieldProps('name')}
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
          {...formik.getFieldProps('email')}
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
          {...formik.getFieldProps('channel')}
        />
        {
          (touched.channel && errors.channel) && <div className={css(error)}>{errors.channel}</div>
        }
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default YoutubeFormv2;