import { combineReducers } from 'redux';
import tripReducer from './tripReducer';
import menuReducer from './menuReducer';

export const rootReducer = combineReducers({
  trips: tripReducer,
  menuOpen: menuReducer,
});
