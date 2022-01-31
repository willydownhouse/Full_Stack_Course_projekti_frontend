import React from 'react';
import { useDispatch } from 'react-redux';
import { IAppAction } from '../interfaces/actions';

type SignUpProps = {
  id: string;
  onClick: () => IAppAction;
  btnText: string;
  text: string;
};

const SignUp = ({ onClick, btnText, text, id }: SignUpProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        <button
          id={id}
          type="button"
          onClick={() => dispatch(onClick())}
          className="btn btn-primary btn-sm mr-2"
        >
          {btnText}
        </button>
        {text}
      </p>
    </div>
  );
};

export default SignUp;
