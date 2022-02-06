import { IAppDispatch } from '../interfaces/actions';
import tripApi from '../api/tripApi';
import { GET_TRIP_REVIEWS, GET_USER_REVIEWS } from './types';

export const getTripsReviews =
  (id: string) => async (dispatch: IAppDispatch) => {
    const res = await tripApi.get(`/reviews?trip=${id}`);

    dispatch({
      type: GET_TRIP_REVIEWS,
      payload: res.data.reviews,
    });
  };

export const getUserReviews =
  (id: string) => async (dispatch: IAppDispatch) => {
    const res = await tripApi.get(`/reviews?user=${id}`);

    // console.log('User reviews');
    // console.log(res.data.reviews);

    dispatch({
      type: GET_USER_REVIEWS,
      payload: res.data.reviews,
    });
  };
