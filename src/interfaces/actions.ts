import { ITrip } from './trip';
import { ThunkDispatch } from 'redux-thunk';
import { IState } from './state';

interface BaseAction {
  type: string;
}

interface TripAction extends BaseAction {
  payload: ITrip | ITrip[];
}

interface MenuAction extends BaseAction {
  payload: boolean;
}

export type IAppAction = TripAction | MenuAction;
export type IAppDispatch = ThunkDispatch<IState, unknown, IAppAction>;
