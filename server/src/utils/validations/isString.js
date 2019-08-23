import addErrorIfNotValid from './addErrorIfNotValid';

const isString = (str) => typeof str === 'string' || str instanceof String;

const addErrorIfNotString = addErrorIfNotValid(isString, 'string');
export {
  isString,
  addErrorIfNotString,
};
