import { GET_USER_BOOKINGS } from '../actions/types';
import { IAppAction } from '../interfaces/actions';

const bookingReducer = (state = [], action: IAppAction) => {
  switch (action.type) {
    case GET_USER_BOOKINGS:
      return action.payload;
    default:
      return [...state];
  }
};

export default bookingReducer;
