import { GET_TRIP_REVIEWS } from '../actions/types';
import { IAppAction } from '../interfaces/actions';

const reviewReducer = (state = [], action: IAppAction) => {
  switch (action.type) {
    case GET_TRIP_REVIEWS:
      return action.payload;

    default:
      return state;
  }
};

export default reviewReducer;
