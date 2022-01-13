import { GET_ALL_TRIPS, IAppDispatch } from './types';
import tripApi from '../api/tripApi';

export const getAllTrips = () => async (dispatch: IAppDispatch) => {
  const res = await tripApi.get('/trips');

  dispatch({
    type: GET_ALL_TRIPS,
    payload: res.data.data,
  });
};
