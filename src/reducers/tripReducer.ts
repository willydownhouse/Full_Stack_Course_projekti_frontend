import { GET_ALL_TRIPS, GET_ONE_TRIP } from '../actions/types';
import { IAppAction } from '../interfaces/actions';

const tripReducer = (state = [], action: IAppAction) => {
  switch (action.type) {
    case GET_ALL_TRIPS:
      return action.payload;
    case GET_ONE_TRIP:
      return action.payload;
    default:
      return state;
  }
};

export default tripReducer;
