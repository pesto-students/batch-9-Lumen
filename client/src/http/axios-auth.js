import axios from 'axios';
import constants from '../constants/constants';

const instance = axios.create({
  baseURL: `${constants.serverURL}${constants.userRoute}`,
});

export default instance;
