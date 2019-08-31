/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
import {
  getBlogsForQuery,
  getUserBlogs as getUserBlogsService,
  getUsersPublicBlog,
  findBlogsFromArray
} from './service';
import { getTopVotedBlogs } from '../votes/service';
import logger from '../../utils/logger';

let topBlogs = [];

const health = (req, res) => {
  res.json({ status: 'Ok' });
};

const sendResponse = (req, res) => {
  res.json({ msg: 'success', blog: req.blog });
};

const getBlogs = async (req, res) => {
  try {
    const { pageNumber } = req.params.pageNumber;
    const { category = '' } = req.query;
    const { search = '' } = req.query;
    const categories = category.length > 0 ? category.split(',') : [];
    const blogs = await getBlogsForQuery(pageNumber, categories, search);
    res.json({ msg: 'Working', blogs });
  } catch (e) {
    logger.error(e);
    res.status(500).json({ msg: 'Something went wrong', error: e });
  }
};

const getTopBlogs = async (req, res) => {
  try {
    let blogsSent = false;
    if (topBlogs.length > 0) {
      blogsSent = true;
      res.json({ msg: 'Working', blogs: topBlogs.slice(0, 12) });
    }
    const blogsIds = await getTopVotedBlogs(1, 30);
    const blogs = await findBlogsFromArray(blogsIds, 30);

    if (!blogsSent) {
      res.json({ msg: 'Working', blogs: topBlogs.slice(0, 12) });
    }
    return Array.prototype.splice.apply(
      topBlogs,
      [0, blogs.length].concat(blogs)
    );
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msg: 'failed', error: e });
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
