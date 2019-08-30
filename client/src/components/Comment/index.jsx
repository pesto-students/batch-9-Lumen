import React, { useState } from 'react';
import {
  Comment, Header, Form, Button,
} from 'semantic-ui-react';
import CommentComponent from './CommentComponent';
import classes from './Comment.module.css';

const CommentsLayout = () => {
  const [formInput, setFormInput] = useState('');
  const [comments, setComment] = useState([]);
  const author = 'Jon Snow';

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


  const commentsLayout = (
    <Comment.Group threaded>
      <Header as="h3" inverted>
          Comments
      </Header>
      {(comments.length > 0) ? comments.map((comment, index) => (
        <div key={`comment-${index}`}>
          { comment }
        </div>
      )) : null}
      <Form reply inverted>
        <Form.TextArea 
        label="Add comment" 
        style={{height: "6em"}}
        value={formInput} 
        placeholder="Say something about the blog..." 
        onChange={(event) => setFormInput(event.target.value)} />
        <Button content="Add Comment" onClick={(event) => createComment(event, formInput)} primary />
      </Form>
    </Comment.Group>
  );
  return (
    <div className={classes.container}>
      { commentsLayout }
    </div>
  );
};

export default CommentsLayout;
