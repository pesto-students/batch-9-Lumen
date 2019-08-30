/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';

import  { getComments, postComment } from '../apis/comments';
import generateRandom from '../utils/generateRandom';

function handleNewCommentsReject(e) {
  console.error('Error in adding comments', e);
}
function useComments(blogId, parentId = null) {
  const [comments, updateComments] = useState([]);
  const [newComment, updateNewComment] = useState({content:'', tempId: `temp-${generateRandom(5)}`});
  const [commentsError, updateCommentsError] = useState(false);

  useEffect(() => {
    function handleCommentsResponse(updatedComments) {
      updateComments(updatedComments);
    }
    function handleCommentsReject() {
      updateCommentsError(true);
    }
      const isTempId = parentId && parentId.length > 0 && parentId.indexOf('temp-') > -1;
      if(!isTempId) {
        getComments(blogId, parentId).then(handleCommentsResponse).catch(handleCommentsReject);
      }
     
  }, [blogId, parentId]);

  useEffect(() => {
    function handleNewCommentSuccess(data) {
      updateComments((latestComments) => {
        const comment = latestComments.find((latestComment) => latestComment._id === data.old.tempId);
        if(comment) {
          comment._id = data.new._id;
          comment.createdAt = data.new.createdAt;
        }
        return [...latestComments];
      })
    }
    if(newComment.content && newComment.content.length > 0) {
      postComment(newComment, blogId, parentId).then(handleNewCommentSuccess).catch(handleNewCommentsReject);
      updateNewComment(()=> ({content: '', tempId: `temp-${generateRandom(5)}`}));
    }
  }, [newComment, blogId, parentId]);

  return [comments, updateComments, newComment, updateNewComment, commentsError];
}

export default useComments;
