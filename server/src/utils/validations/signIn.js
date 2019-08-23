import getErrorsForProperties from './errorForProperties';
import addErrorIfEmpty from './addErrorIfEmpty';
import { addErrorIfNotEmail } from './email';
import { addErrorIfNotString } from './isString';

function validateRegisterInput(user) {
  const propertiesToCheck = [
    ['email', [addErrorIfEmpty, addErrorIfNotString, addErrorIfNotEmail]],
    ['password', [addErrorIfEmpty, addErrorIfNotString]],
  ];
  const isValidAndErrors = getErrorsForProperties(propertiesToCheck, user);
  return isValidAndErrors;
}

export default validateRegisterInput;
