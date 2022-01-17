import { IAppAction } from '../interfaces/actions';
import { OPEN_MENU, CLOSE_MENU } from '../actions/types';

const menuReducer = (state = false, action: IAppAction) => {
  switch (action.type) {
    case OPEN_MENU:
      return action.payload;
    case CLOSE_MENU:
      return action.payload;

    default:
      return state;
  }
};

export default menuReducer;
