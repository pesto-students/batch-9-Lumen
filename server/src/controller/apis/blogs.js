import { Router } from 'express';
import authInstance from '../../configs/authentication';
import { authenticateUserBlog, blogExists } from '../../middlewares/blogs';
import blogsAPI from '../../services/blogs/api';

const router = Router();

router.get('/health', blogsAPI.health);

router.get('/:id', blogsAPI.readPost);

router.post('/', authInstance.isValidUser(), blogsAPI.createPost);

router.put('/:id', authInstance.isValidUser(), blogExists, authenticateUserBlog, blogsAPI.updatePost);

router.delete('/:id', authInstance.isValidUser(), blogExists, authenticateUserBlog, blogsAPI.deletePost);

export default router;
