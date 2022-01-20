import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authentication';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import '../css/loginForm.css';

interface LoginValues {
  email: string;
  password: string;
}
interface LoginErrors {
  email?: string;
  password?: string;
}

const initialValues: LoginValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={({ email, password }: LoginValues, { resetForm }) => {
        dispatch(login(email, password));
        resetForm();
      }}
      validate={(values: LoginValues) => {
        const errors: LoginErrors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form className="form">
          <div className="mb-3">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={`form-control ${
                touched.email && errors.email ? 'is-invalid' : ''
              }`}
            />
            {touched.email && errors.email && (
              <div className="text-danger">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={`form-control ${
                touched.password && errors.password ? 'is-invalid' : ''
              }`}
            />
            {touched.password && errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
          </div>

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
