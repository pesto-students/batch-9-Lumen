import React from 'react';
import {Button, Icon, Label} from 'semantic-ui-react';

const LikeButton = ({count}) => {
  return (
    <div>
      <Button as="div" labelPosition="right">
        <Button color="red">
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic color="red" pointing="left">
          {count}
        </Label>
      </Button>
    </div>
  );
};

export default LikeButton;
