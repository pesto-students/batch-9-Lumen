import React from 'react';
import { Button } from 'semantic-ui-react';

const SubmitButton = ({ children, loading }) => (
  <Button type="submit" color="teal" fluid size="large" loading={loading}>
    {children}
  </Button>
);

export default SubmitButton;
