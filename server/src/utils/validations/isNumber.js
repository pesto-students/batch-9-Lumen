import addErrorIfNotValid from './addErrorIfNotValid';

const isNumber = (num) => !Number.isNaN(num);

const addErrorIfNotNumber = addErrorIfNotValid(isNumber, 'number');

export {
  isNumber,
  addErrorIfNotNumber,
};
