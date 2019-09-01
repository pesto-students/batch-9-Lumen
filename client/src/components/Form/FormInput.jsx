import React from 'react';
import { Form, Input } from 'semantic-ui-react';

import classes from './FormInput.module.css';

const FormInput = props => (
  <Form.Field
    iconPosition="left"
    control={Input}
    fluid
    className={classes.label2}
    {...props}
  />
);

export default FormInput;
