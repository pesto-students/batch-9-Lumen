import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  categories: []
};

const setCategories = (state, categories) =>
  updateObject(state, { categories });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CATEGORIES:
      return setCategories(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
