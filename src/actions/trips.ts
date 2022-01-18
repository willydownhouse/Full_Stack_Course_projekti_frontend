import { GET_ALL_TRIPS, GET_ONE_TRIP } from './types';
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

export const getOneTrip = (id: string) => async (dispatch: IAppDispatch) => {
  const res = await tripApi.get(`/trips/${id}`);

  dispatch({
    type: GET_ONE_TRIP,
    payload: Array(res.data),
  });
};
