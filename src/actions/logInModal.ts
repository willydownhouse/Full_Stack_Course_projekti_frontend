import { OPEN_LOGIN, CLOSE_LOGIN, OPEN_SIGN_UP } from './types';
import { IAppAction } from '../interfaces/actions';

export const openLogin = (): IAppAction => {
  return {
    type: OPEN_LOGIN,
    payload: {
      modalOpen: true,
      loginForm: true,
      signUpForm: false,
    },
  };
};

export const closeLogin = (): IAppAction => {
  return {
    type: CLOSE_LOGIN,
    payload: {
      modalOpen: false,
      loginForm: true,
      signUpForm: false,
    },
  };
};
export const openSignUp = (): IAppAction => {
  return {
    type: OPEN_SIGN_UP,
    payload: {
      modalOpen: true,
      loginForm: false,
      signUpForm: true,
    },
  };
};
