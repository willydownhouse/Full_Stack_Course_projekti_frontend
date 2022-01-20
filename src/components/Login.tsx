import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginModal } from '../actions/logInModal';
import { IState } from '../interfaces/state';
import '../css/login.css';
import { handleCloseModal } from '../utils/modal';
import LoginForm from './LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const logInOpen = useSelector((state: IState) => state.logInOpen);

  const wrapperRef = useRef(null);

  handleCloseModal(wrapperRef, dispatch, closeLoginModal);

  if (!logInOpen) return null;

  return (
    <div className={`login ${logInOpen ? 'anim' : ''}`}>
      <div ref={wrapperRef} className="login-window">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
