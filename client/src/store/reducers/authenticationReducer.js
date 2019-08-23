import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  token: null,
  error: null,
  loading: false,
  showAuthModal: false,
  autoLoginLoading: true,
};

const authUser = (state, action) => updateObject(state, { error: null, loading: true });

const authSuccess = (state, action) => updateObject(state, {
  token: action.token,
  error: null,
  loading: false,
});

const authFail = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const authLogout = (state, action) => updateObject(state, { token: null });

const toggleAuthModal = (state, action) => {
  return updateObject(state, { showAuthModal: !state.showAuthModal });
};

const autoLoginStart = (state, action) => {
  return updateObject(state, { autoLoginLoading: true });
};

const autoLoginFinish = (state, action) => {
  return updateObject(state, { autoLoginLoading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_USER: return authUser(state, action);
    case actionTypes.REGISTER_USER_SUCCESS: return authSuccess(state, action);
    case actionTypes.REGISTER_USER_ERROR: return authFail(state, action);
    case actionTypes.LOGIN_USER: return authUser(state, action);
    case actionTypes.LOGIN_USER_SUCCESS: return authSuccess(state, action);
    case actionTypes.LOGIN_USER_ERROR: return authFail(state, action);
    case actionTypes.LOGOUT: return authLogout(state, action);
    case actionTypes.TOGGLEAUTHENTICATIONMODAL: return toggleAuthModal(state, action);
    case actionTypes.AUTO_LOGIN_START: return autoLoginStart(state, action);
    case actionTypes.AUTO_LOGIN_FINISH: return autoLoginFinish(state, action);
    default:
      return state;
  }
};

export default reducer;
