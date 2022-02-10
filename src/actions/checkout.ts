import { Token } from 'react-stripe-checkout';
import tripApi from '../api/tripApi';
import { IAppDispatch } from '../interfaces/actions';
import { BookedTrip } from '../interfaces/booking';
import { getTokenFromLocalStorage } from '../utils/localStorage';
import { removeNotification, setNotification } from './notification';

export const pay =
  (bookedTrip: BookedTrip, token: Token) => async (dispatch: IAppDispatch) => {
    try {
      const tokenFromLocalStorage = getTokenFromLocalStorage();
      await tripApi.post(
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

      dispatch(setNotification('Succesfull payment, thank you!'));
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
