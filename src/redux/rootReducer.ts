import { combineReducers } from 'redux';
import { apiReducers } from './apiReducer';
import { reducer as authenticationReducer } from './slices/authentication/AuthenticationSlice';
import { reducer as tasksReducer } from './slices/tasks/tasksSlice';

export const rootReducer = combineReducers({
  auth: authenticationReducer,
  tasks: tasksReducer,
  ...apiReducers,
});
