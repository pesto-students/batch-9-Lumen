import isEmpty from './isEmpty';

function validateRegisterInput(user) {
  const errors = {};


  if (isEmpty(user.name)) {
    errors.name = 'Name field is required';
  }

  if (isEmpty(user.email)) {
    errors.email = 'Email field is required';
  }

  if (isEmpty(user.password)) {
    errors.password = 'Password field is required';
  }

  if (isEmpty(user.username)) {
    errors.username = 'Username field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateRegisterInput;
