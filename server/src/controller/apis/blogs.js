import { Router } from 'express';
import authInstance from '../../configs/authentication';
import {
  authenticateUserBlog,
  createBlogRequestValidation,
  saveBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  forwardPublicBlog
} from '../../middlewares/blogs';
import {
  attachUserIfExists,
  checkAndAttachUserForUsername
} from '../../middlewares/user';
import blogsAPI from '../../services/blogs/api';

const router = Router();

router.get('/home/:pageNumber', blogsAPI.getBlogs);

router.get('/health', blogsAPI.health);

router.get(
  '/:id',
  getBlog,
  attachUserIfExists,
  forwardPublicBlog,
  blogsAPI.sendResponse
);

router.post(
  '/',
  createBlogRequestValidation,
  authInstance.isValidUser(),
  saveBlog,
  blogsAPI.sendResponse
);

router.put(
  '/:id',
  authInstance.isValidUser(),
  getBlog,
  authenticateUserBlog,
  updateBlog,
  blogsAPI.sendResponse
);

router.delete(
  '/:id',
  authInstance.isValidUser(),
  getBlog,
  authenticateUserBlog,
  deleteBlog,
  blogsAPI.sendResponse
);

router.get('/', authInstance.isValidUser(), blogsAPI.getUserBlogs);

router.get(
  '/public/:username',
  checkAndAttachUserForUsername,
  blogsAPI.getPublicBlogsOfUser
);

export default router;
