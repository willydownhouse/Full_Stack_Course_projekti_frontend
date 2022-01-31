import React from 'react';

type FormButtonProps = {
  id: string;
  btnText: string;
  disabled: boolean;
};

const FormButton = ({ btnText, disabled, id }: FormButtonProps) => {
  return (
    <button
      id={id}
      type="submit"
      className="button btn-small mb-4"
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default FormButton;
