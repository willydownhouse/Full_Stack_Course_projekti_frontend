import tripApi from '../api/tripApi';
import { IAppAction, IAppDispatch } from '../interfaces/actions';
import { closeLoginModal } from './logInModal';
import { removeNotification, setNotification } from './notification';
import { LOG_IN, LOG_OUT } from './types';

export const login =
  (email: string, password: string) => async (dispatch: IAppDispatch) => {
    try {
      const res = await tripApi.post('/login', {
        email,
        password,
      });

      dispatch({
        type: LOG_IN,
        payload: res.data,
      });
      dispatch(setNotification('You succesfully logged in!'));
      dispatch(closeLoginModal());

      setTimeout(() => {
        dispatch(removeNotification());
      }, 3000);
    } catch (err: any) {
      dispatch(setNotification(err.response.data.message));
      setTimeout(() => {
        dispatch(removeNotification());
      }, 3000);
    }
  };

export const logout = (): IAppAction => {
  return {
    type: LOG_OUT,
    payload: null,
  };
};