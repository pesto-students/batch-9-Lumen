import userController from '../../controller/apis/user';
import blogController from '../../controller/apis/blogs';

const { Router } = require('express');

const router = Router();
router.use('/users', userController);

router.use('/blogs', blogController);

export default router;
