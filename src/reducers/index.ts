import { combineReducers } from 'redux';
import tripReducer from './tripReducer';
import menuReducer from './menuReducer';
import reviewReducer from './reviewReducer';
import authenticationReducer from './authenticationReducer';
import notificationReducer from './notificationReducer';
import logInModalReducer from './logInModalReducer';
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import history from '../history';

export const rootReducer = combineReducers({
  trips: tripReducer,
  reviews: reviewReducer,
  auth: authenticationReducer,
  notification: notificationReducer,
  menuOpen: menuReducer,
  logInModal: logInModalReducer,
  router: createRouterReducer(history),
});
