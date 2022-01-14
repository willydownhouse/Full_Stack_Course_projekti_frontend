import { ITrip } from './trip';
import { ThunkDispatch } from 'redux-thunk';
import { IState } from './state';

interface TripAction {
  type: string;
  payload: ITrip | ITrip[];
}

export type IAppAction = TripAction;
export type IAppDispatch = ThunkDispatch<IState, unknown, IAppAction>;
