import React from 'react';
import { Button } from 'semantic-ui-react';

const SubmitButton = ({ children }) => (
  <Button type="submit" color="teal" fluid size="large">
    {children}
  </Button>
);

export default SubmitButton;
