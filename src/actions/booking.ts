import tripApi from '../api/tripApi';
import { IAppDispatch } from '../interfaces/actions';
import { BookingFormValues } from '../interfaces/booking';
import { removeNotification, setNotification } from './notification';
import { CANCEL_BOOKING, GET_USER_BOOKINGS } from './types';
import {
  getTokenFromLocalStorage,
  getUserIdFromLocalStorage,
} from '../utils/localStorage';
import history from '../history';

export const getUserBookings =
  (id: string) => async (dispatch: IAppDispatch) => {
    try {
      const token = getTokenFromLocalStorage();

      const res = await tripApi.get(`/users/${id}/bookings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch({
        type: GET_USER_BOOKINGS,
        payload: res.data.bookings,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log(err);
      dispatch(setNotification(err.response.data.message));
      setTimeout(() => {
        dispatch(removeNotification());
      }, 3000);
    }
  };

export const book =
  ({ trip, date }: BookingFormValues) =>
  async (dispatch: IAppDispatch) => {
    try {
      const token = getTokenFromLocalStorage();
      const res = await tripApi.post(
        '/bookings',
        {
          trip,
          trip_date: date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 201) {
        history.push('/me');
        dispatch(setNotification('Thank you for your booking'));
        setTimeout(() => {
          dispatch(removeNotification());
        }, 3000);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch(setNotification(err.response.data.message));
      setTimeout(() => {
        dispatch(removeNotification());
      }, 5000);
    }
  };

export const cancelBooking = (id: string) => async (dispatch: IAppDispatch) => {
  try {
    const token = getTokenFromLocalStorage();
    await tripApi.delete(`/bookings/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: CANCEL_BOOKING,
      payload: id,
    });

    const userId = getUserIdFromLocalStorage();

    dispatch(getUserBookings(userId));

    dispatch(setNotification('You succesfully cancelled your booking'));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 3000);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
    dispatch(setNotification(err.response.data.message));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 3000);
  }
};
