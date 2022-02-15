import React from 'react';

type FormButtonProps = {
  id: string;
  btnText: string;
  disabled: boolean;
  style: string;
};

const FormButton = ({ btnText, disabled, id, style }: FormButtonProps) => {
  return (
    <button
      id={id}
      type="submit"
      className={`${style} mb-4`}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default FormButton;
