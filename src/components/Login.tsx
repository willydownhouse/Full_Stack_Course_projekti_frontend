import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeLogin } from '../actions/logInModal';
import { IState } from '../interfaces/state';
import '../css/login.css';
import { handleCloseModal } from '../utils/modal';
import LoginForm from './LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state: IState) => state.logInModal.modalOpen);

  const wrapperRef = useRef(null);

  handleCloseModal(wrapperRef, dispatch, closeLogin);

  if (!modalOpen) return null;

  return (
    <div id="login-form" className={`login ${modalOpen ? 'anim' : ''}`}>
      <div ref={wrapperRef} className="login-window">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
