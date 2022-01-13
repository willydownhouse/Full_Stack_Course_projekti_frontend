import { combineReducers } from 'redux';
import tripReducer from './tripReducer';

export const rootReducer = combineReducers({
  trips: tripReducer,
});
