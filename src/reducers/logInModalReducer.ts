import { IAppAction } from '../interfaces/actions';
import { OPEN_LOGIN, CLOSE_LOGIN } from '../actions/types';

const logInModalReducer = (state = false, action: IAppAction) => {
  switch (action.type) {
    case OPEN_LOGIN:
      return action.payload;
    case CLOSE_LOGIN:
      return action.payload;
    default:
      return state;
  }
};

export default logInModalReducer;
