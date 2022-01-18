import { IAppDispatch } from '../interfaces/actions';
import tripApi from '../api/tripApi';
import { GET_TRIP_REVIEWS } from './types';
export const getTripsReviews =
  (id: string) => async (dispatch: IAppDispatch) => {
    const res = await tripApi.get(`/reviews?trip=${id}`);

    dispatch({
      type: GET_TRIP_REVIEWS,
      payload: res.data.reviews,
    });
  };
