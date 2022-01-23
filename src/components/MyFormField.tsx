import { FormikErrors, FormikTouched, Field } from 'formik';
import { LoginValues } from '../interfaces/login';
import React from 'react';

type MyFormFieldProps = {
  type: string;
  name: string;
  placeholder: string;
  touched: FormikTouched<LoginValues>;
  errors: FormikErrors<LoginValues>;
};

const MyFormField = ({
  type,
  name,
  placeholder,
  touched,
  errors,
}: MyFormFieldProps) => {
  return (
    <div className="mb-3">
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${touched && errors ? 'is-invalid' : ''}`}
      />
      {touched && errors && <div className="text-danger">{errors}</div>}
    </div>
  );
};

export default MyFormField;
