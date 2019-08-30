/* eslint-disable no-underscore-dangle */
import {
  getBlogsForQuery,
  getUserBlogs as getUserBlogsService,
  getUsersPublicBlog,
  findBlogsFromArray
} from './service';
import { getTopVotedBlogs } from '../votes/service';

const health = (req, res) => {
  res.json({ status: 'Ok' });
};

const sendResponse = (req, res) => {
  res.json({ msg: 'success', blog: req.blog });
};

const getBlogs = async (req, res) => {
  const { pageNumber } = req.params.pageNumber;
  const { category = '' } = req.query;
  const { search = '' } = req.query;
  const categories = category.split(',');
  const blogs = await getBlogsForQuery(pageNumber, categories, search);
  res.json({ msg: 'Working', blogs });
};

const getTopBlogs = async (req, res) => {
  try {
    const blogsIds = await getTopVotedBlogs(1, 10);
    const blogs = await findBlogsFromArray(blogsIds, 10);
    res.json({ msg: 'Working', blogs });
  } catch (e) {
    console.error(e);
    res.status(500).json({ msg: 'failed', error: e });
  }
};

const getUserBlogs = async (req, res) => {
  const blogs = await getUserBlogsService(req.user._id);
  res.json({ msg: 'Working', blogs });
};

const getPublicBlogsOfUser = async (req, res) => {
  const blogs = await getUsersPublicBlog(req.referenceUser._id);
  res.json({ msg: 'Working', blogs });
};
const apis = {
  health,
  sendResponse,
  getBlogs,
  getUserBlogs,
  getPublicBlogsOfUser,
  getTopBlogs
};
export default apis;
