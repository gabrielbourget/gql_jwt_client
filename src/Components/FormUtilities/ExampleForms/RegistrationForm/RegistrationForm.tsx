import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from '../../FormikControl/FormikControl';


const RegistrationForm:React.FC = () => {

  const radioOptions = [
    { key: 'Email', value: 'emailmoc' },
    { key: 'Telephone', value: 'telephonemoc' }
  ];

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    modeOfContact: '',
    phone: '',
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = yup.object({
    email: yup.string().email('Invalid Email Formt').required('Email is Required'),
    password: yup.string().required('Password is Required'),
    confirmPassword: yup.string().oneOf(
      [yup.ref('password'), ''],
      'Passwords must match'
    ).required('You Must Confirm the Password'),
    modeOfContact: yup.string().required('Mode of Contact is Required'),
    phone: yup.string().when('modeOfContact', {
      is: 'telephonemoc',
      then: yup.string()
        .matches(phoneRegExp, 'Invalid Phone Number Format')
        .required('Phone Number is Required')
    }),
  });

  const onSubmit = (values: any) => {
    console.log('form submission values -> ', values);
  };

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
                customControlCradleStyles={{ width: "100%" }}
                />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
                customControlCradleStyles={{ width: "100%" }}
              />
              <FormikControl
                control="input"
                type="password"
                label="Confirm Password"
                name="confirmPassword"
              />
              <FormikControl
                control="radio"
                label="Mode of Contact"
                name="modeOfContact"
                options={radioOptions}
              />
              <FormikControl
                control="input"
                type="text"
                label="Phone Number"
                name="phone"
              />
              <button type="submit" disabled={!formik.isValid}>Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  );
}

export default RegistrationForm;