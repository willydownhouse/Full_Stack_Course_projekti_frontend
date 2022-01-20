import { OPEN_LOGIN, CLOSE_LOGIN } from './types';
import { IAppAction } from '../interfaces/actions';

export const openLoginModal = (): IAppAction => {
  return {
    type: OPEN_LOGIN,
    payload: true,
  };
};

export const closeLoginModal = (): IAppAction => {
  return {
    type: CLOSE_LOGIN,
    payload: false,
  };
};
