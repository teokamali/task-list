import { combineReducers } from 'redux';
import { apiReducers } from './apiReducer';
import { reducer as authenticationReducer } from './slices/authentication/AuthenticationSlice';

export const rootReducer = combineReducers({
  auth: authenticationReducer,
  ...apiReducers,
});
