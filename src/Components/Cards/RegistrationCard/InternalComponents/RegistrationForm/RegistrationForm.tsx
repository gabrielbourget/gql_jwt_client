// -> Beyond Codebase
import React, { useContext } from 'react';
import * as yup from 'yup';
import { Formik, Form, FormikValues } from 'formik';
import { css } from 'aphrodite';
// -> Within Codebase
import Input from '../../../../../Components/FormUtilities/Input/Input';
import Button from '../../../../../Components/Button/Button';
import { UIContext, ThemeInfo } from '../../../../../Components/UI_InfoProvider/UI_InfoProvider';
import { ROUNDED } from "../../../../../constants"
// -> Within Component
import { IRegistrationFormState, IRegistrationFormProps } from './helpers';
import { styleGen } from './RegistrationFormStyles';

const initialValues: IRegistrationFormState = {
  email: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup.string().oneOf(
    [yup.ref('password'), ''],
    'Passwords must match'
  ).required('You must confirm your password'),
});

const RegistrationForm: React.FC<IRegistrationFormProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  const { onSubmit, onLoginClick } = props;
  const { formCradle, topCradle, bottomCradle, bottomMessageCradle, bottomMessageText } = styleGen(themeInfo);

  const onFormSubmission = (values: FormikValues, onSubmitProps: any) => {
    // const { resetForm, setSubmitting } = onSubmitProps;
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onFormSubmission}
    >
      {
        (formik) => {
          return (
            <Form className={css(formCradle)}>
              <div className={css(topCradle)}>
                <Input
                  required
                  name="email"
                  label="Email"
                  borderGeometry={ROUNDED}
                  customInputCradleStyles={{ height: 35 }}
                  customControlCradleStyles={{ width: "100%" }}
                  />
                <div style={{ marginTop: themeInfo.distance.two }}></div>

                {/* - TODO: ->  Internationalize text */}
                <Input
                  required
                  name="password"
                  label="Password"
                  type="password"
                  borderGeometry={ROUNDED}
                  customInputCradleStyles={{ height: 35 }}
                  customControlCradleStyles={{ width: "100%" }}
                  />
                <div style={{ marginTop: themeInfo.distance.two }}></div>

                <Input
                  required
                  name="passwordConfirmation"
                  label="Confirm your password"
                  type="password"
                  borderGeometry={ROUNDED}
                  customInputCradleStyles={{ height: 35 }}
                  customControlCradleStyles={{ width: "100%" }}
                />
              </div>

              <div style={{ marginTop: themeInfo.distance.two }}></div>

              <div className={css(bottomCradle)}>
                <Button
                  onClick={() => {}}
                  buttonText="SIGN UP"
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty || formik.isSubmitting }
                  customTextStyles={{
                    fontSize: '1.6rem',
                    fontWeight: 'bold'
                  }}
                  customCradleStyles={{
                    paddingTop: themeInfo.distance.one,
                    paddingBottom: themeInfo.distance.one,
                    paddingRight: themeInfo.distance.two,
                    paddingLeft: themeInfo.distance.two,
                    width: "100%",
                    height: 35,
                  }}
                />
                <div style={{ marginTop: themeInfo.distance.two }}></div>

                <div className={css(bottomMessageCradle)}>
                  <p className={css(bottomMessageText)}>Have an account already?</p>
                  <Button
                    buttonText="Log In"
                    transparent
                    onClick={onLoginClick}
                    customTextStyles={{
                      fontSize: '1.2rem',
                      color: themeInfo.palette.primary
                    }}
                    customCradleStyles={{
                      paddingTop: themeInfo.distance.one,
                      paddingBottom: themeInfo.distance.one,
                      paddingRight: themeInfo.distance.two,
                      paddingLeft: themeInfo.distance.two,
                    }}
                  />
                </div>
              </div>
            </Form>
          )
        }
      }
    </Formik>
  );
}

export default RegistrationForm;