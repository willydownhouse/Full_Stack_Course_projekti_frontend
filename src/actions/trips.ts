import { GET_ALL_TRIPS } from './types';
import { IAppDispatch } from '../interfaces/actions';
import tripApi from '../api/tripApi';

export const getAllTrips =
  (type = '') =>
  async (dispatch: IAppDispatch) => {
    const res = type
      ? await tripApi.get(`/trips?type=${type}`)
      : await tripApi.get('/trips');

    dispatch({
      type: GET_ALL_TRIPS,
      payload: res.data.trips,
    });
  };
