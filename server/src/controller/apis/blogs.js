import { Router } from 'express';
import authInstance from '../../configs/authentication';
import {
  authenticateUserBlog, createBlogRequestValidation, saveBlog, getBlog, updateBlog, deleteBlog,
} from '../../middlewares/blogs';
import blogsAPI from '../../services/blogs/api';

const router = Router();

router.get('/home/:pageNumber', blogsAPI.getBlogs);

router.get('/health', blogsAPI.health);

router.get('/:id', getBlog, blogsAPI.sendResponse);

router.post('/', createBlogRequestValidation, authInstance.isValidUser(), saveBlog, blogsAPI.sendResponse);

router.put('/:id', authInstance.isValidUser(), getBlog, authenticateUserBlog, updateBlog, blogsAPI.sendResponse);

router.delete('/:id', authInstance.isValidUser(), getBlog, authenticateUserBlog, deleteBlog, blogsAPI.sendResponse);

export default router;
