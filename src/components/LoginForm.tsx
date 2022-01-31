import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from '../actions/authentication';
import { LoginValues } from '../interfaces/login';
import { Formik, Form, FormikErrors, FormikTouched } from 'formik';
import MyFormField from './MyFormField';
import SignUp from './SignUp';
import FormButton from './FormButton';
import * as yup from 'yup';
import '../css/loginForm.css';
import { openSignUp } from '../actions/logInModal';
import { IState } from '../interfaces/state';
import { string } from 'yup/lib/locale';

const initialValues: LoginValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

const LoginSchema = yup.object().shape(
  {
    email: yup.string().email('Invalid email').required('Required'),
    password: yup
      .string()
      .min(6, 'Password at least 6 characters')
      .required('Required'),
    confirmPassword: yup
      .string()
      .notRequired()
      .when('confirmPassword', {
        is: (value: string) => value && value.length > 0,
        then: yup
          .string()
          .oneOf([yup.ref('password'), null], 'Passwords must be the same'),
      }),
  },
  [['confirmPassword', 'confirmPassword']]
);

const LoginForm = () => {
  const showSignUp = useSelector(
    (state: IState) => state.logInModal.signUpForm
  );
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(
          { email, password, confirmPassword }: LoginValues,
          { resetForm }
        ) => {
          showSignUp
            ? dispatch(signup(email, password, confirmPassword as string))
            : dispatch(login(email, password));

          resetForm();
        }}
        validationSchema={LoginSchema}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form className="login-form">
            <MyFormField
              type="text"
              id="email"
              name="email"
              placeholder="email"
              errors={errors.email as FormikErrors<LoginValues>}
              touched={touched.password as FormikTouched<LoginValues>}
            />

            <MyFormField
              id="password"
              type="password"
              name="password"
              placeholder="password"
              errors={errors.password as FormikErrors<LoginValues>}
              touched={touched.password as FormikTouched<LoginValues>}
            />

            {showSignUp ? (
              <MyFormField
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                errors={errors.confirmPassword as FormikErrors<LoginValues>}
                touched={touched.confirmPassword as FormikTouched<LoginValues>}
              />
            ) : null}

            <FormButton
              id={showSignUp ? 'signup' : 'signin'}
              btnText={showSignUp ? 'Sign up' : 'Sign in'}
              disabled={isSubmitting}
            />
            {showSignUp ? null : (
              <SignUp
                id="btn-signup"
                onClick={openSignUp}
                btnText="Sign up"
                text="for booking your dream trip"
              />
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
