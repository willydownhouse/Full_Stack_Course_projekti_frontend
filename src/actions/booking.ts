import tripApi from '../api/tripApi';
import { IAppDispatch } from '../interfaces/actions';
import { GET_USER_BOOKINGS } from './types';

export const getUserBookings =
  (id: string) => async (dispatch: IAppDispatch) => {
    try {
      const user = localStorage.getItem('user');

      const { token } = JSON.parse(user as string);

      const res = await tripApi.get(`/users/${id}/bookings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: GET_USER_BOOKINGS,
        payload: res.data.bookings,
      });
      console.log('user bookings:');
      console.log(res.data.bookings);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
    }
  };
