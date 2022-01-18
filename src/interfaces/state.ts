import { IReview } from './review';
import { ITrip } from './trip';

export interface IState {
  trips: ITrip[];
  reviews: IReview[];
  menuOpen: boolean;
}
