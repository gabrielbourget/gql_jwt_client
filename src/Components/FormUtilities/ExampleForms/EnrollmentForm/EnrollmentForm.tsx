import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from '../../FormikControl/FormikControl';

const courseDropdownOptions = [
  { key: 'Select your course', value: '' },
  { key: 'React', value: 'react' },
  { key: 'Angular', value: 'angular' },
  { key: 'Vue', value: 'vue' },
];

const checkboxOptions = [
  { key: 'HTML', value: 'html' },
  { key: 'CSS', value: 'css' },
  { key: 'Javascript', value: 'javascript' },
];

const EnrollmentForm:React.FC = () => {

  const initialValues = {
    email: '',
    bio: '',
    course: '',
    skills: [],
    courseDate: null
  };

  const validationSchema = yup.object({
    email: yup.string().email('Invalid Email Format').required('Email is Required'),
    bio: yup.string().required('Biography is required'),
    course: yup.string().required('Course is required'),
    skills: yup.array().required('Skills are required'),
    courseDate: yup.date().required('Course Date is Required').nullable(),
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
              />
              <FormikControl
                control="textarea"
                label="Biography"
                name="bio"
              />
              <FormikControl
                control="select"
                name="course"
                label="Course"
                options={courseDropdownOptions}
              />
              <FormikControl
                control="checkbox"
                label="Your skillset"
                name="skills"
                options={checkboxOptions}
              />
              {/* <FormikControl
                control="date"
                label="Course Date"
                name="courseDate"
              /> */}
              <button type="submit" disabled={!formik.isValid}>Submit</button>
            </Form>
          );
        }
      }
    </Formik>
  );
}

export default EnrollmentForm;
