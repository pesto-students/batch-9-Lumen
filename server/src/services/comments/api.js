/* eslint-disable no-underscore-dangle */
import {
  createComment as createCommentService,
  deleteComment as deleteCommentService,
  getComments as getTenCommentsService,
} from './service';

const health = (req, res) => {
  res.json({ status: 'Ok' });
};

const createComment = async (req, res) => {
  try {
    const commentsParentId = req.query.parentId || null;
    const { content } = req.body;

    const newComment = await createCommentService(req.blog._id,
      req.user._id, content,
      commentsParentId);

    res.json(newComment);
  } catch (e) {
    res.status(500);
    res.json({ msg: 'Something went wrong', error: e });
  }
};

const getTenComments = async (req, res) => {
  try {
    const commentsParentId = req.query.parentId || null;
    const commentsPerPage = 10;
    const comments = await getTenCommentsService(
      req.blog._id,
      req.params.page,
      commentsParentId,
      commentsPerPage,
    );
    res.json(comments);
  } catch (e) {
    res.status(500);
    res.json({ msg: 'Something went wrong', error: e });
  }
};


const deleteComment = async (req, res) => {
  try {
    const deletedCommentResult = await deleteCommentService(req.params.commentId, req.user._id);
    res.json(deletedCommentResult);
  } catch (e) {
    res.status(500);
    res.json({ msg: 'Something went wrong', error: e });
  }
};

const apis = {
  health,
  createComment,
  getTenComments,
  deleteComment,
};
export default apis;
