import userController from '../../controller/apis/user';
import blogController from '../../controller/apis/blogs';
import votesController from '../../controller/apis/votes';
import commentsController from '../../controller/apis/comments';

const { Router } = require('express');

const router = Router();
router.use('/users', userController);

router.use('/blogs', blogController);

router.use('/votes', votesController);

router.use('/comments', commentsController);

export default router;
