/* eslint-disable no-useless-escape */
import addErrorIfNotValid from './addErrorIfNotValid';

const validateEmail = (email) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
};

const addErrorIfNotEmail = addErrorIfNotValid(validateEmail, 'email');

export {
  addErrorIfNotEmail,
  validateEmail,
};
