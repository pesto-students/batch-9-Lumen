/* eslint-disable no-param-reassign */
import axios from 'axios';
import constants from '../constants/constants';

const instance = axios.create({
  baseURL: `${constants.serverURL}${constants.userRoute}`,
});

instance.interceptors.request.use(config => {
  const authToken = localStorage.getItem('token');
  const bearerToken = `Bearer ${authToken}`;
  if(authToken && authToken.length > 0) {
    config.headers.Authorization = bearerToken;
  } else {
    config.headers.Authorization = '';
  }
  return config;
});
export default instance;
