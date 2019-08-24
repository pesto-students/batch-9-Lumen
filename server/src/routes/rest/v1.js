import userController from '../../controller/apis/user';
import blogController from '../../controller/apis/blogs';
import votesController from '../../controller/apis/votes';
import commentsController from '../../controller/apis/comments';
import categoriesController from '../../controller/apis/categories';

const { Router } = require('express');

const router = Router();
router.use('/users', userController);

router.use('/blogs', blogController);

router.use('/votes', votesController);

router.use('/comments', commentsController);

router.use('/categories', categoriesController);

export default router;
