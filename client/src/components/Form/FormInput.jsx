import React from 'react';
import { Form, Input } from 'semantic-ui-react';

import classes from './FormInput.module.css';

const FormInput = props => (
  <Form.Field
    iconPosition="left"
    control={Input}
    fluid
    // style={{ textAlign: "left"}}
    className={classes.label}
    {...props}
  />
);

export default FormInput;
