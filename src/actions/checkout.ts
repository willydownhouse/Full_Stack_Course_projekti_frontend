import { Token } from 'react-stripe-checkout';
import tripApi from '../api/tripApi';
import { IAppDispatch } from '../interfaces/actions';
import { BookedTrip } from '../interfaces/booking';
import {
  getTokenFromLocalStorage,
  getUserIdFromLocalStorage,
} from '../utils/localStorage';
import { getUserBookings } from './booking';
import { removeNotification, setNotification } from './notification';

export const pay =
  (bookedTrip: BookedTrip, token: Token) => async (dispatch: IAppDispatch) => {
    try {
      const tokenFromLocalStorage = getTokenFromLocalStorage();
      const res = await tripApi.post(
        '/checkout',
        {
          token,
          trip: bookedTrip,
        },
        {
          headers: {
            Authorization: `Bearer ${tokenFromLocalStorage}`,
          },
        }
      );

      console.log(res);

      dispatch(setNotification('Succesfull payment, thank you!'));

      const id = getUserIdFromLocalStorage();

      dispatch(getUserBookings(id));

      setTimeout(() => {
        dispatch(removeNotification());
      }, 3000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch(setNotification(err.response.data.message));
      setTimeout(() => {
        dispatch(removeNotification());
      }, 5000);
    }
  };
