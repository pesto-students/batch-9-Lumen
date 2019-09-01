import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';

const TextInput = ({ name, iconName, ...props }) => (
  <FormInput
    required
    icon={iconName}
    placeholder={name}
    type="text"
    label={name}
    id={name}
    {...props}
  />
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextInput;
