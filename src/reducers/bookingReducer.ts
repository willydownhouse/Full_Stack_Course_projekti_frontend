import { CANCEL_BOOKING, GET_USER_BOOKINGS } from '../actions/types';
import { IAppAction } from '../interfaces/actions';
import { IBooking } from '../interfaces/booking';

const bookingReducer = (state: IBooking[] = [], action: IAppAction) => {
  switch (action.type) {
    case GET_USER_BOOKINGS:
      return action.payload;
    case CANCEL_BOOKING:
      return state.filter(booking => booking._id === action.payload);
    default:
      return [...state];
  }
};

export default bookingReducer;
