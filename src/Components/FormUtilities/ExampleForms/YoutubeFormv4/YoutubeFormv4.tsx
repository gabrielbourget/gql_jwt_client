import React, { useState } from 'react';
import { css } from 'aphrodite';
import {
  Formik, Form, Field, ErrorMessage,
  FormikValues, FieldArray, FastField
} from 'formik';
import * as Yup from 'yup';
import { styleGen } from './YoutubeFormv4Styles';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  address: '',
  description: '',
  socials: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['',''],
  pNums: [''],
};

const mockSavedData = {
  name: 'Gabriel',
  email: 'g@b.com',
  channel: 'g_channel',
  address: '28383838',
  description: 'description',
  socials: {
    facebook: 'facebook',
    twitter: 'twitter',
  },
  phoneNumbers: ['1234','5678'],
  pNums: [''],
};

const onSubmit = (values: FormikValues, onSubmitProps: any) => {
  console.log('form values upon submission -> ', values);
  console.log('onSubmitProps -> ', onSubmitProps);
  const { resetForm, setSubmitting } = onSubmitProps;

  setTimeout(() => {
    resetForm();
    setSubmitting(false);
  }, 1000);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  channel: Yup.string().required('Channel is required'),
  // description: Yup.string().required('Description is required'),
  address: Yup.string().required('Address is required'),
  socials: Yup.object().shape({
    facebook: Yup.string().required('Facebook profile is required'),
    twitter: Yup.string().required('Twitter profile is required')
  }),
  phoneNumbers: Yup.array().of(Yup.number().required('Phone number is required')),
});

const validateDescription = (value: string) => {
  let error;

  if (!value) error = 'Description is required';

  return error;
}

const YoutubeFormv4:React.FC = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const {
    formCradle, formControl, labelStyle, formField, error
  } = styleGen();

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // -> Three options below for controlling when validation fires.
      // validateOnBlur={false}
      // validateOnChange={false}
      // validateOnMount={true}
    >
      {
        (formik) => {
          // console.log('formik tings -> ', formik);
          return (
            <Form className={css(formCradle)}>
              <div className={css(formControl)}>
                <label className={css(labelStyle)} htmlFor="name">Name</label>
                <Field
                  className={css(formField)}
                  type="text"
                  id="name"
                  name="name"
                  placeholder=""
                />
                <ErrorMessage
                  name="name"
                  render={(msg: string) => (
                    <div className={css(error)}>{msg}</div>
                  )}
                />
              </div>
              
              <div className={css(formControl)}>
                <label className={css(labelStyle)} htmlFor="email">Email</label>
                <Field
                  className={css(formField)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder=""
                />
                <ErrorMessage
                  name="email"
                  render={(msg: string) => (
                    <div className={css(error)}>{msg}</div>
                  )}
                />
              </div>
              
              <div className={css(formControl)}>
                <label className={css(labelStyle)} htmlFor="channel">Channel</label>
                <Field
                  className={css(formField)}
                  type="text"
                  id="channel"
                  name="channel"
                  placeholder=""
                />
                <ErrorMessage
                  name="channel"
                  render={(msg: string) => (
                    <div className={css(error)}>{msg}</div>
                  )}
                />
              </div>
              
              <div className={css(formControl)}>
                <label className={css(labelStyle)} htmlFor="description">Description</label>
                <Field
                  className={css(formField)}
                  type="text"
                  id="description"
                  name="description"
                  placeholder=""
                  as="textarea"
                  validate={validateDescription}
                />
                <ErrorMessage
                  name="description"
                  render={(msg: string) => (
                    <div className={css(error)}>{msg}</div>
                  )}
                />
              </div>
              
              <div className={css(formControl)}>
                <label className={css(labelStyle)} htmlFor="address">Address</label>
                <FastField
                  type="text"
                  name="address"
                  placeholder=""
                >
                  {
                    (props: any) => {
                      // console.log('Address field render');
                      const { field, meta } = props;
                      return (
                        <div>
                          <input className={css(formField)} id="address" type="text" {...field} />
                          {
                            (meta.touched && meta.error) && <div className={css(error)}>{meta.error}</div>
                          }
                        </div>
                      );
                    }
                  }
                </FastField>
              </div>

              <div className={css(formControl)}>
                <label className={css(labelStyle)} htmlFor="facebook">Facebook</label>
                <Field
                  className={css(formField)}
                  type="text"
                  id="facebook"
                  name="socials.facebook"
                  placeholder=""
                />
                <ErrorMessage
                  name="socials.facebook"
                  render={(msg: string) => (
                    <div className={css(error)}>{msg}</div>
                  )}
                />
              </div>
              
              <div className={css(formControl)}>
                <label className={css(labelStyle)} htmlFor="twitter">Twitter</label>
                <Field
                  className={css(formField)}
                  type="text"
                  id="twitter"
                  name="socials.twitter"
                  placeholder=""
                />
                <ErrorMessage
                  name="socials.twitter"
                  render={(msg: string) => (
                    <div className={css(error)}>{msg}</div>
                  )}
                />
              </div>

              <div className={css(formControl)}>
                <label className={css(labelStyle)} htmlFor="primaryPhoneNumber">Primary phone number</label>
                <Field
                  className={css(formField)}
                  type="text"
                  id="primaryPhoneNumber"
                  name="phoneNumbers[0]"
                  placeholder=""
                />
                <ErrorMessage
                  name="phoneNumbers[0]"
                  render={(msg: string) => (
                    <div className={css(error)}>{msg}</div>
                  )}
                />
              </div>
              
              <div className={css(formControl)}>
                <label className={css(labelStyle)} htmlFor="secondaryPhoneNumber">Secondary phone number</label>
                <Field
                  className={css(formField)}
                  type="text"
                  id="secondaryPhoneNumber"
                  name="phoneNumbers[1]"
                  placeholder=""
                />
                <ErrorMessage
                  name="phoneNumbers[1]"
                  render={(msg: string) => (
                    <div className={css(error)}>{msg}</div>
                  )}
                />
              </div>

              <div className={css(formControl)}>
                <label className={css(labelStyle)} htmlFor="phoneNumberList">List of Phone Numbers</label>
                <FieldArray name="pNums">
                  {
                    (fieldArrayProps) => {
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      const { push, remove, form: { errors, values: { pNums }}} = fieldArrayProps;
                      // console.log('form errors -> ', errors);
                      return (
                        <>
                          {
                            pNums.map((pNum: any, index: number) => (
                              <div key={index}>
                                <Field
                                  name={`pNums[${index}]`}
                                  type="text"
                                />
                                {
                                  (index > 0) && <button type="button" onClick={() => remove(index)}> - </button>
                                }
                                <button type="button" onClick={() => push('')}> + </button>
                              </div>
                            ))
                          }
                        </>
                      );
                    }
                  }
                </FieldArray>
              </div>

              {/* <button type="button" onClick={() => formik.setFieldTouched('description')}>Touch Description</button>
              <button
                type="button"
                onClick={() => formik.setTouched({
                  name: true, email: true, channel: true, description: true
                })}
              >Touch the Whole Form</button>
              <button type="button" onClick={() => formik.validateField('description')}>Validate Description</button>
              <button type="button" onClick={() => formik.validateForm()}>Validate the Whole Form</button> */}
              <button type="button" onClick={() => setFormValues(mockSavedData)}>Load Saved Data</button>
              <button
                type="submit"
                // disabled={!formik.isValid} // -> Disable the submission button based on form validity.
                disabled={formik.isSubmitting} // -> Disabled based on whether the form is actively submitting.
              >Submit</button>
            </Form>
          )
        }
      }
      
    </Formik>
  );
}

export default YoutubeFormv4;