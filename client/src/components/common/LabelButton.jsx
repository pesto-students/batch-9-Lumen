import React from 'react';
import {Button, Icon} from 'semantic-ui-react';

const LabelButton = ({activeText, deActiveText, active, activeIcon, deActiveIcon, ...rest}) => {
  return (
    <Button icon labelPosition="left" {...rest} color={active? "blue" : "orange"}>
      <Icon name={active? activeIcon : deActiveIcon} />
      {active? activeText : deActiveText}
    </Button>
  );
};

export default LabelButton;
