import { ITrip } from './trip';
import { ThunkDispatch } from 'redux-thunk';
import { IState } from './state';
import { IReview } from './review';

interface BaseAction {
  type: string;
}

interface TripAction extends BaseAction {
  payload: ITrip | ITrip[];
}

interface ReviewAction extends BaseAction {
  payload: IReview | IReview[];
}

interface MenuAction extends BaseAction {
  payload: boolean;
}

export type IAppAction = TripAction | ReviewAction | MenuAction;
export type IAppDispatch = ThunkDispatch<IState, unknown, IAppAction>;
