import { combineReducers } from 'redux';

// TODO: Delete this
const tempReducer = (state, action) => ({ ...state });
const rootReducer = combineReducers({
  reducer: tempReducer,
});

export default rootReducer;
