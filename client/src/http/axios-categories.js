/* eslint-disable no-param-reassign */
import axios from 'axios';
import constants from '../constants/constants';

const instance = axios.create({
  baseURL: `${constants.serverURL}${constants.categoriesRoute}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

instance.interceptors.request.use(config => {
  const token = `Bearer ${localStorage.getItem('token')}`;
  config.headers.Authorization = token;
  return config;
});

export default instance;