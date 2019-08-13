import React from 'react';
import { Button as Btn } from 'semantic-ui-react';

const Button = (props) => (
  <div>
    <Btn {...props}>
      {' '}
      {props.name}
    </Btn>
  </div>
);

export default Button;
