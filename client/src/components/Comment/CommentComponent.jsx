import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Comment, Form } from 'semantic-ui-react';
import CommentReply from './Reply';
import classes from './index.module.css';

const CommentComponent = ({
  image, author, postedOn, content,
}) => {
  const [showReplyBox, setReplyBoxState] = useState(false);
  const [singleReply, setSingleReply] = useState(null);
  const [replies, setReplies] = useState([]);

  const createReplyComment = (event, replyContent) => {
    event.preventDefault();
    setReplyBoxState(false);
    setSingleReply('');
    if (!replyContent || replyContent.trim() === '') {
      return;
    }
    if (replies) {
      setReplies(replies.concat(
        <CommentReply
          image={image}
          author={author}
          postedOn={new Date().toString()}
          reply={replyContent}
        />,
      ));
    }
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
          <Comment.Author as="a" className={classes.color}>{author}</Comment.Author>
          <Comment.Metadata  className={classes.color}>
            <div>{postedOn.toString()}</div>
          </Comment.Metadata>
          <Comment.Text className={classes.color}>{content}</Comment.Text>
          <Comment.Actions>
            <Comment.Action 
            onClick={() => setReplyBoxState(!showReplyBox)}
            className={classes.replyLink}>
              Reply
            </Comment.Action>
          </Comment.Actions>
        </Comment.Content>
        <Comment.Group>
          {(replies.length > 0) ? replies.map((reply, index) => (
            <div key={`reply-${index}`}>
              { reply }
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
