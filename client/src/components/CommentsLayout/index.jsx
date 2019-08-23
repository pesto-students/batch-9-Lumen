import React, { useState } from 'react';
import {
  Comment, Header, Form, Button,
} from 'semantic-ui-react';
import CommentComponent from '../CommentComponent/index';

const CommentsLayout = () => {
  const [showComments, setShowComments] = useState(false);
  const [formInput, setFormInput] = useState('');
  const [comments, setComment] = useState([]);
  const author = 'Jon Snow'; // ,hard-written for now, will be fetched here

  const createComment = (event, commentContent) => {
    event.preventDefault();
    setFormInput('');
    if (!commentContent || commentContent.trim() === '') {
      return;
    }
    if (comments) {
      setComment(comments.concat(
        <CommentComponent
          author={author}
          postedOn={new Date().toString()}
          content={commentContent.trim()}
        />,
      ));
    }
  };

  const showCommentsButton = (
    <Button content="Show Comments" onClick={() => setShowComments(!showComments)} />
  );

  const commentsLayout = (
    <Comment.Group threaded>
      <Header as="h3">
          Comments
      </Header>
      {(comments.length > 0) ? comments.map((comment, index) => (
        <div key={`comment-${index}`}>
          { comment }
        </div>
      )) : null}
      <Form reply>
        <Form.TextArea label="Add comment" value={formInput} placeholder="Say something..." onChange={(event) => setFormInput(event.target.value)} />
        <Button content="Add Comment" onClick={(event) => createComment(event, formInput)} primary />
      </Form>
    </Comment.Group>
  );
  return (
    <div>
      { showComments ? commentsLayout : showCommentsButton }
    </div>
  );
};

export default CommentsLayout;
