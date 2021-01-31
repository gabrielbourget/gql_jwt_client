import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from '../../FormikControl/FormikControl';

const LoginForm: React.FC = (props) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    email: yup.string().email('Invalid Email Format').required('Email is Required'),
    password: yup.string().required('Password is Required'),
  });

  const onSubmit = (values: any) => {
    console.log('form submission values -> ', values);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        (formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
              <button
                type="submit"
                disabled={!formik.isValid}
              >
                submit
              </button>
            </Form>
          );
        }
      }
    </Formik>
  );
}

export default LoginForm;
