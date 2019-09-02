import getErrorsForProperties from './errorForProperties';
import addErrorIfEmpty from './addErrorIfEmpty';
import { addErrorIfNotString } from './isString';

function validateUpdateUser(user) {
  const propertiesToCheck = [
    ['name', [addErrorIfEmpty, addErrorIfNotString]],
    ['description', [addErrorIfEmpty, addErrorIfNotString]]
  ];
  const isValidAndErrors = getErrorsForProperties(propertiesToCheck, user);
  return isValidAndErrors;
}

export default validateUpdateUser;
