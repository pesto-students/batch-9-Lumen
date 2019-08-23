import React from 'react';
import PropTypes from 'prop-types';
import Input from '../FormInput';

const PasswordInput = ({ verify, passwordToMatch, ...props }) => {
  let error =
    'Password should be of minimum 8 character long and contain atleast one uppercase, lowercase and special character';
  let label = 'Password';
  let id = 'password';
  let pattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$';

  if (verify) {
    error = 'Verify password should match with above password';
    label = 'Verify Password';
    id = 'verify-password';
    pattern = passwordToMatch;
  }

  return (
    <Input
      id={id}
      icon="lock"
      placeholder="Password"
      type="password"
      pattern={pattern}
      title={error}
      label={label}
      required
      {...props}
    />
  );
};

PasswordInput.propTypes = {
  verify: PropTypes.bool,
  password: PropTypes.string.isRequired,
};

PasswordInput.defaultProps = {
  verify: false,
};

export default PasswordInput;
