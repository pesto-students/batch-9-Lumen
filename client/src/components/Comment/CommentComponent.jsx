/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Comment, Form } from 'semantic-ui-react';
import CommentReply from './Reply';
import classes from './index.module.css';
import useReplies from '../../hooks/useComments';
import fromNow from '../../utils/date/fromNow';

const CommentComponent = ({
  commentId,
   image,
   author,
   postedOn,
  content,
  blogId,
  _id,
  username,
}) => {
  const isTempComment = commentId.indexOf('temp') > -1;
  const [showReplyBox, setReplyBoxState] = useState(false);
  const [singleReply, setSingleReply] = useState(null);
  const [replies = [], updateReplies, newReply, addNewReply] = useReplies(blogId, commentId);
  const createReplyComment = (event, replyContent) => {
    event.preventDefault();
    setReplyBoxState(false);
    setSingleReply('');
    if (!replyContent || replyContent.trim() === '') {
      return;
    }
    const createdTime = '...';
    const newReplyData = {
      _id: newReply.tempId,
      content: replyContent,
      author: {
        _id,
        name: author,
        username,
        image
      },
      createdAt:createdTime
    }
    addNewReply((latestReply) => ({...latestReply, content: replyContent}));
    updateReplies((latestReplies) => [...latestReplies, newReplyData]);
  };
  const replyInput = (
    <Form reply>
      <Form.TextArea label="Reply" 
      style={{height: "4em"}}
      placeholder="Reply to comment..." 
      onChange={(event) => setSingleReply(event.target.value)} />
      <Button type="button" content="Add Reply" labelPosition="right" icon="edit" onClick={(event) => createReplyComment(event, singleReply)} primary />
    </Form>
  );

  return (
    <div>
      <Comment>
        <Comment.Avatar src={image} />
        <Comment.Content>
          <Comment.Author as="a" href={`/profile/${username}`} className={classes.color}>{author}</Comment.Author>
          <Comment.Metadata  className={classes.color}>
            <div>{isTempComment? '...' : fromNow(postedOn)}</div>
          </Comment.Metadata>
          <Comment.Text className={classes.color}>{content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action 
            onClick={() => setReplyBoxState(!showReplyBox)}
            className={classes.replyLink}>
              {isTempComment? 'Adding...': 'Reply'}
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
          {(replies.length > 0) ? replies.map((reply) => (
            <div key={reply._id}>
              <CommentReply
                  replyId={reply._id}
                  image={reply.author.imageUrl}
                  author={reply.author.name}
                  postedOn={fromNow(reply.createdAt)}
                  reply={reply.content}
                  username={reply.author.username}
                />
            </div>
          )) : null}
        </Comment.Group>
      </Comment>
      { showReplyBox ? replyInput : null }
    </div>
  );
};

CommentComponent.propTypes = {
  author: PropTypes.string,
  postedOn: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

CommentComponent.defaultProps = {
  author: 'DefaultCommentAuthor',
  postedOn: new Date().toDateString(),
  content: 'defaultCommentContent',
  image: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
};

export default CommentComponent;
