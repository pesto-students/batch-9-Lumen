import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import classes from './index.module.css';

const Reply = ({
  image, author, postedOn, reply, replyId, username,
}) => {
  const isTempReply = replyId.indexOf('temp-') > -1;
  return (
  <Comment>
    <Comment.Avatar src={image} />
    <Comment.Content>
      <Comment.Author as="a" href={`/profile/${username}` } className={classes.color}>{author}</Comment.Author>
      <Comment.Metadata>
        <div className={classes.color}>{isTempReply? '...' : postedOn}</div>
      </Comment.Metadata>
      <Comment.Text className={classes.color}>{reply}</Comment.Text>
    </Comment.Content>
  </Comment>
)
};

Reply.propTypes = {
  image: PropTypes.string,
  author: PropTypes.string,
  postedOn: PropTypes.string,
  reply: PropTypes.string,
  replyId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

Reply.defaultProps = {
  image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
  author: 'DefaultReplyAuthor',
  postedOn: new Date(),
  reply: PropTypes.string,
};

export default Reply;
