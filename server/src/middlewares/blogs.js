/* eslint-disable no-underscore-dangle */
import { blogCreation as blogCreationValidation } from '../utils/validations';
import {
  createBlog,
  getBlogById,
  updateBlog as updateBlogInDB,
  deleteBlogById
} from '../services/blogs/service';
import { isValid } from '../utils/helpers/mongoose';

const authenticateUserBlog = async (req, res, next) => {
  const userID = req.user._id;
  const blogOwnerId = req.blog.userId._id;
  if (userID.toString() !== blogOwnerId.toString()) {
    return res.status(401).json({ msg: 'Unauthorized Access' });
  }

  return next();
};

const createBlogRequestValidation = async (req, res, next) => {
  const blog = req.body;
  const userFieldsValidity = blogCreationValidation(blog);
  if (!userFieldsValidity.isValid) {
    res.status(400);
    return res.json(userFieldsValidity.errors);
  }
  return next();
};

const saveBlog = async (req, res, next) => {
  const { title, content } = req.body;
  const userId = req.user._id;
  try {
    const newBlog = await createBlog(title, content, userId);
    req.blog = newBlog;
    next();
  } catch (err) {
    res.status(500).json({ msg: 'Something went wrong', error: err });
  }
};

const getBlog = async (req, res, next) => {
  const blogID = req.params.id;
  const validObjectId = isValid(blogID);

  if (validObjectId) {
    try {
      const blog = await getBlogById(blogID);
      if (blog) {
        req.blog = blog;
        return next();
      }
      return res.status(404).json({ msg: 'Blog not found.' });
    } catch (err) {
      return res.status(500).json({ msg: 'Something went wrong', error: err });
    }
  } else {
    return res.status(400).json({ msg: "Can't find blog, invalid url" });
  }
};

const updateBlog = async (req, res, next) => {
  const newBlog = { ...req.blog };
  newBlog.title = req.body.title;
  newBlog.content = req.body.content;
  newBlog.isPrivate = req.body.isPrivate;
  newBlog.published = req.body.published;
  newBlog.category = req.body.category;
  newBlog.imageUrl = req.body.imageUrl;
  const blogID = req.params.id;

  try {
    const updatedBlog = await updateBlogInDB(blogID, newBlog);
    if (updatedBlog) {
      req.blog = updatedBlog;
      return next();
    }
    return res.status(404).json({ msg: "can't find blog with the given id." });
  } catch (err) {
    return res.status(500).json({ msg: 'Something went wrong', error: err });
  }
};

const deleteBlog = async (req, res, next) => {
  const blogID = req.params.id;
  try {
    const blog = await deleteBlogById(blogID);
    if (blog) {
      req.blog = blog;
      return next();
    }
    return res.status(404).json({ msg: 'Blog not found.' });
  } catch (err) {
    return res.status(500).json({ msg: 'Something went wrong', error: err });
  }
};

const forwardPublicBlog = async (req, res, next) => {
  const isPublicBlog = !req.blog.isPrivate && req.blog.published;
  if (isPublicBlog) {
    return next();
  }

  const isUserBlog =
    req.user && String(req.user._id) === String(req.blog.userId._id);
  if (isUserBlog) {
    return next();
  }
  return res.status(404).json({ msg: 'Not Found' });
};
export {
  authenticateUserBlog,
  createBlogRequestValidation,
  saveBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  forwardPublicBlog
};
