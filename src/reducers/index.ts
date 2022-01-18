import { combineReducers } from 'redux';
import tripReducer from './tripReducer';
import menuReducer from './menuReducer';
import reviewReducer from './reviewReducer';

export const rootReducer = combineReducers({
  trips: tripReducer,
  reviews: reviewReducer,
  menuOpen: menuReducer,
});
