import React from 'react';
import { Form } from './helpers';

const CommonForm = ({children, ...rest}) => (
  <Form {...rest}>
    {children}
  </Form>
);

export default CommonForm;