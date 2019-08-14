
import userController from '../../controller/apis/user';

const { Router } = require('express');

const router = Router();
router.use('/users', userController);

export default router;
