import ITrip from '../interfaces/trip';
import { rootReducer } from '../reducers';
import { ThunkDispatch } from 'redux-thunk';

export const GET_ALL_TRIPS = 'GET_ALL_TRIPS';

interface TripAction {
  type: string;
  payload: ITrip | ITrip[];
}

export type IAppAction = TripAction;
export type IAppState = ReturnType<typeof rootReducer>;
export type IAppDispatch = ThunkDispatch<IAppState, unknown, IAppAction>;
