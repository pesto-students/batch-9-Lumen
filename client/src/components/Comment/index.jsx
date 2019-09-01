/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Comment, Header, Form, Button,
  Popup,
} from 'semantic-ui-react';
import CommentComponent from './CommentComponent';
import classes from './Comment.module.css';
import useComments from '../../hooks/useComments';

const CommentsLayout = ({
  blogId,
   _id,
   name,
   username,
}) => {
  const [formInput, setFormInput] = useState('');
  const [comments, updateComments, newComment, addNewComment] = useComments(blogId);

  const createComment = (event, commentContent) => {
    event.preventDefault();
    setFormInput('');
    if (!commentContent || commentContent.trim() === '' || !_id) {
      return;
    }
    const createdTime = '...';
    const newCommentData = {
      _id: newComment.tempId,
      content: commentContent,
      author: {
        _id,
        name,
        username
      },
      createdAt:createdTime
    }

    addNewComment((latestComment) => ({...latestComment, content: commentContent}));
    updateComments((latestComments) => [...latestComments, newCommentData]);
  };

const addCommentButton = (<Button content="Add Comment" onClick={(event) => createComment(event, formInput)} primary />)
  const commentsLayout = (
    <Comment.Group threaded>
      <Header as="h3" inverted>
          Comments
      </Header>
      {(comments.length > 0) ? comments.map((comment) => (
        <div key={comment._id}>
           <CommentComponent
          author={comment.author.name}
          image={comment.author.imageUrl}
          postedOn={comment.createdAt}
          content={comment.content}
          commentId={comment._id}
          blogId={blogId}
          name={name}
          username={comment.author.username}
        />
        </div>
      )) : null}
      <Form reply inverted>
        <Form.TextArea 
        label="Add comment" 
        style={{height: "6em"}}
        value={formInput} 
        placeholder="Say something about the blog..." 
        onChange={(event) => setFormInput(event.target.value)} />
        {
        _id ? addCommentButton : (
        <Popup 
          trigger={addCommentButton}
          content='Please login to like and comment'
          inverted
         />)
        
      }
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
