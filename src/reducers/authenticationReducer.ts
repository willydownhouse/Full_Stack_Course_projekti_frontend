import { LOG_IN, LOG_OUT } from '../actions/types';
import { IAppAction, LoginPayload } from '../interfaces/actions';
import { IAuthObj } from '../interfaces/authentication';

const initialState: IAuthObj = {
  isLoggedIn: false,
  user: null,
};

const authenticationReducer = (state = initialState, action: IAppAction) => {
  switch (action.type) {
    case LOG_IN:
      localStorage.setItem('token', (action.payload as LoginPayload).token);

      return {
        ...state,
        isLoggedIn: true,
        user: (action.payload as LoginPayload).user,
      };

    case LOG_OUT:
      localStorage.removeItem('token');
      return { ...initialState };
    default:
      return { ...state };
  }
};

export default authenticationReducer;
