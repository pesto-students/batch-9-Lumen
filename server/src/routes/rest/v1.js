import userController from '../../controller/apis/user';
import blogController from '../../controller/apis/blogs';
import votesController from '../../controller/apis/votes';

const { Router } = require('express');

const router = Router();
router.use('/users', userController);

router.use('/blogs', blogController);

router.use('/votes', votesController);

export default router;
