import { IAppAction } from '../interfaces/actions';
import { OPEN_LOGIN, CLOSE_LOGIN, OPEN_SIGN_UP } from '../actions/types';

const initialState = {
  modalOpen: false,
  loginForm: true,
  signUpForm: false,
};

const logInModalReducer = (state = initialState, action: IAppAction) => {
  switch (action.type) {
    case OPEN_LOGIN:
      return action.payload;
    case CLOSE_LOGIN:
      return action.payload;
    case OPEN_SIGN_UP:
      return action.payload;
    default:
      return state;
  }
};

export default logInModalReducer;
