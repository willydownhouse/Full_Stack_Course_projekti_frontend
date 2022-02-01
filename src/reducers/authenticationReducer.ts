import { LOG_IN, LOG_OUT, SET_CURRENT_USER } from '../actions/types';
import { IAppAction, LoginPayload } from '../interfaces/actions';
import { IAuthObj } from '../interfaces/authentication';

const initialState: IAuthObj = {
  isLoggedIn: false,
  user: null,
};

const authenticationReducer = (state = initialState, action: IAppAction) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload as IAuthObj;
    case LOG_IN:
      localStorage.setItem('user', JSON.stringify(action.payload));

      return {
        isLoggedIn: true,
        user: (action.payload as LoginPayload).user,
      };

    case LOG_OUT:
      localStorage.removeItem('user');
      return { ...initialState };
    default:
      return { ...state };
  }
};

export default authenticationReducer;
