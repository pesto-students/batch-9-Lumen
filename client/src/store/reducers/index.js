import { combineReducers } from 'redux';
import authReducer from './authenticationReducer';
import home from './home';

const rootReducer = combineReducers({
  auth: authReducer,
  home
});

export default rootReducer;
