import axios from 'axios';
import constants from '../constants/constants';

const instance = axios.create({
  baseURL: `${constants.serverURL}${constants.categoriesRoute}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

export default instance;
