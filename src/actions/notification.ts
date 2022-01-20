import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from './types';

export const setNotification = (message: string) => {
  return {
    type: SET_NOTIFICATION,
    payload: message,
  };
};

export const removeNotification = () => {
  return {
    type: REMOVE_NOTIFICATION,
    payload: null,
  };
};
