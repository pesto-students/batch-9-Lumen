import getErrorsForProperties from './errorForProperties';

function validateRegisterInput(user) {
  const propertiesToCheck = [
    'email',
    'password',
  ];
  const isValidAndErrors = getErrorsForProperties(propertiesToCheck, user);
  return isValidAndErrors;
}

export default validateRegisterInput;
