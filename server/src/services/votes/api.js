/* eslint-disable no-underscore-dangle */
import { voteBlog, countVotesOfBlog, getUserUpVotes } from './service';

const health = (req, res) => {
  res.json({ status: 'Ok' });
};

const upVoteBlog = async (req, res) => {
  try {
    const vote = await voteBlog(req.blog._id, req.user._id, 1);
    res.json({ msg: 'success', vote });
  } catch (e) {
    res.status(500);
    res.json({ msg: 'Something went wrong.', error: e });
  }
};

const downVoteBlog = async (req, res) => {
  try {
    const vote = await voteBlog(req.blog._id, req.user._id, -1);
    res.json({ msg: 'success', vote });
  } catch (e) {
    res.status(500);
    res.json({ msg: 'Something went wrong.', error: e });
  }
};

const countBlogVotes = async (req, res) => {
  try {
    const votes = await countVotesOfBlog(req.blog._id);
    res.json(votes);
  } catch (e) {
    res.status(500);
    res.json({ msg: 'Something went wrong.', error: e });
  }
};

const getUserVotes = async (req, res) => {
  try {
    const votes = await getUserUpVotes(req.blog._id, req.user._id);
    res.json(votes);
  } catch (e) {
    res.status(500);
    res.json({ msg: 'Something went wrong.', error: e });
  }
};

const apis = {
  health,
  upVoteBlog,
  downVoteBlog,
  countBlogVotes,
  getUserVotes,
};
export default apis;
