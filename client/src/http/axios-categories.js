/* eslint-disable no-param-reassign */
import axios from 'axios';
import constants from '../constants/constants';

const jwtToken = localStorage.getItem('token');
let token;
if(jwtToken && jwtToken.length >0) {
  token= `Bearer ${jwtToken}`
} else {
  token = ''
}

const instance = axios.create({
  baseURL: `${constants.serverURL}${constants.categoriesRoute}`,
  headers: {
    Authorization: token
  }
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
