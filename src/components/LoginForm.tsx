import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authentication';
import { LoginValues } from '../interfaces/login';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  FieldProps,
  FormikErrors,
  FormikTouched,
} from 'formik';
import MyFormField from './MyFormField';
import * as yup from 'yup';
import '../css/loginForm.css';

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup
    .string()
    .min(6, 'Password at least 6 characters')
    .required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={({ email, password }: LoginValues, { resetForm }) => {
        console.log('login');
        dispatch(login(email, password));
        resetForm();
      }}
      validationSchema={LoginSchema}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form className="login-form">
          <MyFormField
            type="text"
            name="email"
            placeholder="email"
            errors={errors.email as FormikErrors<LoginValues>}
            touched={touched.password as FormikTouched<LoginValues>}
          />

          <MyFormField
            type="password"
            name="password"
            placeholder="password"
            errors={errors.password as FormikErrors<LoginValues>}
            touched={touched.password as FormikTouched<LoginValues>}
          />

          <button
            className="button btn-small"
            type="submit"
            disabled={isSubmitting}
          >
            Sign In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
