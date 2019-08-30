import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import classes from './index.module.css';

const Reply = ({
  image, author, postedOn, reply,
}) => (
  <Comment>
    <Comment.Avatar src={image} />
    <Comment.Content>
      <Comment.Author as="a" className={classes.color}>{author}</Comment.Author>
      <Comment.Metadata>
        <div className={classes.color}>{postedOn}</div>
      </Comment.Metadata>
      <Comment.Text className={classes.color}>{reply}</Comment.Text>
    </Comment.Content>
  </Comment>
);

Reply.propTypes = {
  image: PropTypes.string,
  author: PropTypes.string,
  postedOn: PropTypes.string,
  reply: PropTypes.string,
};

Reply.defaultProps = {
  image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
  author: 'DefaultReplyAuthor',
  postedOn: new Date(),
  reply: PropTypes.string,
};

export default Reply;
