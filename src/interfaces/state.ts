import { IReview } from './review';
import { ITrip } from './trip';
import { IAuthObj } from './authentication';

export interface IState {
  trips: ITrip[];
  reviews: IReview[];
  menuOpen: boolean;
  logInOpen: boolean;
  auth: IAuthObj;
  error: string | null;
}
