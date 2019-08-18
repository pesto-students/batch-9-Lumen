import { Router } from 'express';
import authInstance from '../../configs/authentication';
import { authenticateUserBlog, blogExists } from '../../middlewares/blogs';
import blogsAPI from '../../services/blogs/api';

const router = Router();

router.get('/health', blogsAPI.health);

router.get('/:id', blogsAPI.readBlog);

router.post('/', authInstance.isValidUser(), blogsAPI.createBlog);

router.put('/:id', authInstance.isValidUser(), blogExists, authenticateUserBlog, blogsAPI.updateBlog);

router.delete('/:id', authInstance.isValidUser(), blogExists, authenticateUserBlog, blogsAPI.deleteBlog);

export default router;
