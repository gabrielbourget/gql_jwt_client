import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from '../FormikControl/FormikControl';

const initialValues = {
  email: '',
  description: '',
  selectOption: '',
  radioOption: '',
  checkboxOptions: [],
  date: null,
};

const dropdownOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Karate', value: 'bf9761ff-182d-4f10-a0ea-b964c9b32d80'  },
  { key: 'Kung Fu', value: 'ee885ea2-1a8c-460a-93ea-96d66d551223' },
  { key: 'Judo', value: 'a834959d-aeba-493c-ba32-5defce6d17bc' },
];

const radioGroupOptions = [
  { key: 'Karate', value: '309ec96c-32d2-4450-89eb-728727d16af2'  },
  { key: 'Kung Fu', value: '11c1f3ee-9896-4598-9d33-f0d6c4cf5dcb' },
  { key: 'Judo', value: 'd7e63d05-5ce3-48c8-810d-665d634a6cb1' },
];

const checkboxGroupOptions = [
  { key: 'Karate', value: '1f1ff6b7-215e-4f44-9684-28aaf72498ac'  },
  { key: 'Kung Fu', value: 'a46cb331-2b4c-4d93-b4c7-0275c9ac7e52' },
  { key: 'Judo', value: 'e7d19d08-938d-4435-ac72-f175168af92d' },
];

const validationSchema = yup.object({
  email: yup.string().required('Email is required'),
  description: yup.string().required('Description is required'),
  selectOption: yup.string().required('Select option is required'),
  radioOption: yup.string().required('Radio option is required'),
  checkboxOptions: yup.array().required('Checkbox options are required'),
  date: yup.date().required('Date is required').nullable(),
})

const onSubmit = (values: any, onSubmitProps: any) => {
  console.log('form submission vlaues -> ', values);
};

const FormikControlsDemo:React.FC = () => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        (formik) => (
          <Form>
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select a topic"
              name="selectOption"
              options={dropdownOptions}
            />
            <FormikControl
              control="radio"
              label="Select a Radio Option"
              name="radioOption"
              options={radioGroupOptions}
            />
            <FormikControl
              control="checkbox"
              label="Select a Checkbox Option"
              name="checkboxOptions"
              options={checkboxGroupOptions}
            />
            <FormikControl
              control="date"
              label="Pick a date"
              name="date"
            />
            <button type="submit">Submit</button>
          </Form>
        )
      }
    </Formik>
  );
}

export default FormikControlsDemo;
