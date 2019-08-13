
const Router = require('express').Router;
import userController from '../../controller/apis/user';

let router = Router();
router.use('/users', userController);

export default router;