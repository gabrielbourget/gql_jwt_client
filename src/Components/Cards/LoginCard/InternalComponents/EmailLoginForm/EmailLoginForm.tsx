// -> Beyond Codebase
import React, { useContext } from 'react';
import * as yup from 'yup';
import { Formik, Form, FormikValues } from 'formik';
import { css } from 'aphrodite';
// -> Within Codebase
// import BackToLoginChoicesButton from '../../InternalComponents/BackToLoginChoicesButton/BackToLoginChoicesButton';
import Input from '../../../../../Components/FormUtilities/Input/Input';
import Button from '../../../../../Components/Button/Button';
import { UIContext, ThemeInfo } from '../../../../../Components/UI_InfoProvider/UI_InfoProvider';
// -> Within Component
import { ILoginFormState, ILoginFormProps } from './helpers';
import { styleGen } from './EmailLoginFormStyles';

const initialValues: ILoginFormState = {
  email: '',
  password: '',
};

// - TODO: -> Internationalize validation messages
const validationSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required')
});

const EmailLoginForm: React.FC<ILoginFormProps> = (props) => {
  const { themeInfo }: { themeInfo: ThemeInfo } = useContext(UIContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onSubmit, onRegistrationClick, onBackToLoginChoicesClick } = props;
  const { formCradle, topCradle, bottomCradle } = styleGen(themeInfo);

  console.log("onSubmit -> ", onSubmit);

  const onFormSubmission = (values: FormikValues, onSubmitProps: any) => {
    // const { resetForm, setSubmitting } = onSubmitProps;
    onSubmit(values);

    // - TODO: -> Actual timeout (before the form is reset and its submission status is
    //            set to false) will be due to a network delay of logging into a backend.
    //            Remove this mocked timeout once component is integrated full stack.
    // setTimeout(() => {
    //   resetForm();
    //   setSubmitting(false);
    // }, 2000);
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
              {/* <BackToLoginChoicesButton onClick={onBackToLoginChoicesClick} /> */}
              <div style={{ marginTop: themeInfo.distance.two }}></div>
              <div className={css(topCradle)}>
                {/* - TODO: ->  Internationalize text */}
                <Input
                  name="email"
                  label="Email"
                  // mode="border"
                  width="100%"
                />
                <div style={{ marginTop: themeInfo.distance.two }}></div>
                {/* - TODO: ->  Internationalize text */}
                <Input
                  name="password"
                  label="Password"
                  type="password"
                  // mode="border"
                  width="100%"
                />
              </div>
              <div style={{ marginTop: themeInfo.distance.two }}></div>
              <div className={css(bottomCradle)}>
                {/* - TODO: -> Internationalize text */}
                <Button
                  buttonText="Register"
                  transparent
                  onClick={onRegistrationClick}
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
                <div style={{ marginRight: themeInfo.distance.two }}></div>
                {/* - TODO: -> Internationalize text */}
                <Button
                  onClick={() => {}}
                  buttonText="LOGIN"
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty || formik.isSubmitting }
                  customTextStyles={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold'
                  }}
                  customCradleStyles={{
                    paddingTop: themeInfo.distance.one,
                    paddingBottom: themeInfo.distance.one,
                    paddingRight: themeInfo.distance.two,
                    paddingLeft: themeInfo.distance.two,
                  }}
                />
              </div>
            </Form>
          );
        }
      }
    </Formik>
  );
}

export default EmailLoginForm;
