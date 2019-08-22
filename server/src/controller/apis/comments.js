import { Router } from 'express';
import authInstance from '../../configs/authentication';
import { getBlog } from '../../middlewares/blogs';
import CommentsAPI from '../../services/comments/api';

const router = Router();

router.get('/health', CommentsAPI.health);

router.post('/create/:id', authInstance.isValidUser(), getBlog, CommentsAPI.createComment);


router.get('/:id/:page', getBlog, CommentsAPI.getTenComments);


router.delete('/:commentId', authInstance.isValidUser(), CommentsAPI.deleteComment);

export default router;
