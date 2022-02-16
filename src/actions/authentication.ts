import tripApi from '../api/tripApi';
import { IAppDispatch } from '../interfaces/actions';
import { closeLogin } from './logInModal';
import { removeNotification, setNotification } from './notification';
import { LOG_IN, LOG_OUT, SET_CURRENT_USER } from './types';
import history from '../history';

export const login =
  (
    email: string,
    password: string,
    location: string,
    notification = 'You succesfully logged in!'
  ) =>
  async (dispatch: IAppDispatch) => {
    try {
      const res = await tripApi.post('/login', {
        email,
        password,
      });

      dispatch({
        type: LOG_IN,
        payload: res.data,
      });
      dispatch(setNotification(notification));
      dispatch(closeLogin());

      location === '/' ? history.push('/me') : history.push(location);

      setTimeout(() => {
        dispatch(removeNotification());
      }, 3000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch(setNotification(err.response.data.message));
      setTimeout(() => {
        dispatch(removeNotification());
      }, 3000);
    }
  };

export const signup =
  (email: string, password: string, confirmPassword: string) =>
  async (dispatch: IAppDispatch) => {
    try {
      const res = await tripApi.post('/signup', {
        email,
        password,
        confirmPassword,
      });

      if (res.status === 201) {
        dispatch(login(email, password, 'You succesfully created account!'));
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch(setNotification(err.response.data.message));
      setTimeout(() => {
        dispatch(removeNotification());
      }, 3000);
    }
  };

export const logout = () => (dispatch: IAppDispatch) => {
  history.push('/');

  dispatch(setNotification('You logged out!'));
  setTimeout(() => {
    dispatch(removeNotification());
  }, 3000);

  dispatch({
    type: LOG_OUT,
    payload: null,
  });
};

export const setCurrentUser =
  (id: string, location: string) => async (dispatch: IAppDispatch) => {
    try {
      const res = await tripApi.get(`/users/${id}/exists`);

      if (res.data.user) {
        dispatch({
          type: SET_CURRENT_USER,
          payload: {
            isLoggedIn: true,
            user: id,
          },
        });

        history.push(location);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
    }
  };
