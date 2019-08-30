import axios from '../http/axios-comments';

const postComment = async (comment, blogId, parentId) => {
  try {
    let requestUrl = `/create/${blogId}`;
    if(parentId && parentId.length > 0) {
      requestUrl = `${requestUrl}?parentId=${parentId}`;
    }
    const response = await axios.post(requestUrl, {content: comment.content} );
    return {new: response.data, old: comment};
  } catch(e) {
    if(!e.response) {
      throw e
    }
    throw e.response.data;
  }
}

const getComments = async (blogId, parentId, page = 1) => {
  try {
    let requestUrl = `/${blogId}/${page}`;
    if(parentId && parentId.length > 0) {
      requestUrl = `${requestUrl}?parentId=${parentId}`;
    }
    const response = await axios.get(requestUrl);
    return response.data;
  } catch(e) {
    if(!e.response) {
      throw e
    }
    throw e.response.data;
  }
}

const deleteComment = async (commentId) => {
  try {
    const response = await axios.delete(`/${commentId}`);
    return response.data;
  } catch(e) {
    if(!e.response) {
      throw e
    }
    throw e.response.data;
  }
}

export {
  postComment,
  getComments,
  deleteComment,
}
