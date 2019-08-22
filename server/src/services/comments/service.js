import CommentsModel from '../../models/comments';

const createComment = async (blogId, author, content, parentId = null) => {
  const commentObject = {
    blogId,
    parentId,
    author,
    content,
  };
  const newComment = await CommentsModel.create(commentObject);
  return newComment.toObject();
};

const deleteComment = async (commentId, author) => {
  const query = {
    $or: [{
      _id: commentId,
      author,
    }, { parentId: commentId }],
  };
  const deletedResult = await CommentsModel.deleteMany(query);
  return deletedResult;
};

const getComments = async (blogId, page = 1, parentId = null, commentsInOnePage = 10) => {
  const query = {
    blogId,
    parentId,
  };
  const pageIndex = parseInt(page, 10) - 1;
  const skipComments = pageIndex * commentsInOnePage;
  const sortOptions = {
    createdAt: 'asc',
  };
  const requiredTenComments = await CommentsModel.find(query)
    .sort(sortOptions)
    .skip(skipComments)
    .limit(commentsInOnePage);
  return requiredTenComments;
};

export {
  createComment,
  deleteComment,
  getComments,
};
