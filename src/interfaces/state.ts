import { IReview } from './review';
import { ITrip } from './trip';
import { IAuthObj } from './authentication';
import { IBooking } from './booking';

type LogInModal = {
  modalOpen: boolean;
  loginForm: boolean;
  signUpForm: boolean;
};

export interface IState {
  trips: ITrip[];
  reviews: IReview[];
  bookings: IBooking[];
  menuOpen: boolean;
  logInModal: LogInModal;
  auth: IAuthObj;
  notification: string | null;
  error: string | null;
}
