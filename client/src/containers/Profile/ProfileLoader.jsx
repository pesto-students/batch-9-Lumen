import React from 'react';
import {Placeholder, Segment} from 'semantic-ui-react';

const ProfileLoader = () => {
    return (
        <Segment raised inverted>
        <Placeholder inverted>
          <Placeholder.Header >
            <Placeholder.Image />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
      
)
};

export default ProfileLoader;
