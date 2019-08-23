import { combineReducers } from 'redux';
import authReducer from './authenticationReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
