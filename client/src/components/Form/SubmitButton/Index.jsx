import React from 'react';
import { Button } from 'semantic-ui-react';

const SubmitButton = ({ children, loading }) => (
  <Button type="submit" color="facebook" fluid size="large" loading={loading} disabled={loading}>
    {children}
  </Button>
);

export default SubmitButton;
