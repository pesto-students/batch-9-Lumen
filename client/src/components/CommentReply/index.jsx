import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';

const CommentReply = ({
  image, author, postedOn, reply,
}) => (
  <Comment>
    <Comment.Avatar src={image} />
    <Comment.Content>
      <Comment.Author as="a">{author}</Comment.Author>
      <Comment.Metadata>
        <div>{postedOn}</div>
      </Comment.Metadata>
      <Comment.Text>{reply}</Comment.Text>
    </Comment.Content>
  </Comment>
);

CommentReply.propTypes = {
  image: PropTypes.string,
  author: PropTypes.string,
  postedOn: PropTypes.string,
  reply: PropTypes.string,
};

CommentReply.defaultProps = {
  image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
  author: 'DefaultReplyAuthor',
  postedOn: new Date(),
  reply: PropTypes.string,
};

export default CommentReply;
