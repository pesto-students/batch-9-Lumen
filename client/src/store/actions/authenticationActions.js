import axios from '../../http/axios-auth';
import * as actionTypes from './actionTypes';

export const registrationStart = () => ({
  type: actionTypes.REGISTER_USER,
});

export const registrationSuccess = (token) => ({
  type: actionTypes.REGISTER_USER_SUCCESS,
  token,
});

export const registrationFail = (error) => ({
  type: actionTypes.REGISTER_USER_ERROR,
  error,
});

export const loginStart = () => ({
  type: actionTypes.LOGIN_USER,
});

export const loginSuccess = (token) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  token,
});

export const loginFail = (error) => ({
  type: actionTypes.LOGIN_USER_ERROR,
  error,
});

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.LOGOUT,
  };
};


export const register = (name, email, username, password) => (dispatch) => {
  dispatch(registrationStart());
  const authData = {
    email,
    password,
    name,
    username,
  };

  axios.post('/signup', authData)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(registrationSuccess(response.data.token));
      dispatch(toggleAuthModal());
    })
    .catch((err) => {
      if (err.response && err.response.headers && err.response.headers['www-authenticate']) {
        dispatch(loginFail(err.response.headers['www-authenticate']));
      } else {
        dispatch(loginFail(err.toString));
      }
    });
};

export const login = (email, password) => (dispatch) => {
  dispatch(loginStart());
  const authData = {
    email,
    password,
  };

  axios.post('/signin', authData)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch(loginSuccess(response.data.token));
      dispatch(toggleAuthModal());
    })
    .catch((err) => {
      if (err.response && err.response.headers && err.response.headers['www-authenticate']) {
        dispatch(loginFail(err.response.headers['www-authenticate']));
      } else {
        dispatch(loginFail(err.toString));
      }
    });
};

const autoLoginStart = () => ({
  type: actionTypes.AUTO_LOGIN_START,
});

const autoLoginFinish = () => ({
  type: actionTypes.AUTO_LOGIN_FINISH,
});

export const authAutoLogin = () => (dispatch) => {
  dispatch(autoLoginStart());
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(logout());
  } else {
    dispatch(loginSuccess(token));
  }
  dispatch(autoLoginFinish());
};

export const toggleAuthModal = () => ({
  type: actionTypes.TOGGLEAUTHENTICATIONMODAL,
});
