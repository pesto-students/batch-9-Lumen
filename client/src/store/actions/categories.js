import axios from '../../http/axios-categories';
import { GET_ALL_CATEGORIES } from './actionTypes';

const getCategories = () => dispatch => {
  axios.get('/').then(response => {
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: response.data
    });
  });
};

export default getCategories;
