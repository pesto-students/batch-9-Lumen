import React from 'react';
import Input from '../FormInput';

const EmailInput = props => (
  <Input
    required
    id="email"
    icon="mail"
    placeholder="E-mail address"
    type="email"
    label="Email"
    {...props}
  />
);

export default EmailInput;
