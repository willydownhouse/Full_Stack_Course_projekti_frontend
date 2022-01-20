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

export interface MenuAction extends BaseAction {
  payload: boolean;
}

interface LoginAction extends BaseAction {
  payload: LoginPayload;
}

interface NotificationAction extends BaseAction {
  payload: string | null;
}

export type LoginPayload = {
  token: string;
  user: string;
};

export type IAppAction =
  | TripAction
  | ReviewAction
  | MenuAction
  | LoginAction
  | NotificationAction;
export type IAppDispatch = ThunkDispatch<IState, unknown, IAppAction>;
