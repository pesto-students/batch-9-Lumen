import { Router } from 'express';
import authInstance from '../../configs/authentication';
import { getBlog } from '../../middlewares/blogs';
import VotesAPI from '../../services/votes/api';

const router = Router();

router.get('/health', VotesAPI.health);

router.get('/:id', getBlog, VotesAPI.countBlogVotes);

router.get('/:id/myvotes', authInstance.isValidUser(), getBlog, VotesAPI.getUserVotes);

router.post('/:id/up', authInstance.isValidUser(), getBlog, VotesAPI.upVoteBlog);

router.post('/:id/down', authInstance.isValidUser(), getBlog, VotesAPI.downVoteBlog);

export default router;
