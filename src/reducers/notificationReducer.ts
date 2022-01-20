import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/types';
import { IAppAction } from '../interfaces/actions';

const notificationReducer = (state = null, action: IAppAction) => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.payload;
    case REMOVE_NOTIFICATION:
      return null;
    default:
      return state;
  }
};

export default notificationReducer;
