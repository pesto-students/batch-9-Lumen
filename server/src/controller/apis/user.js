
import userAPI from '../../services/user/user';

const { Router } = require('express');

const router = Router();

router.get('/', userAPI.testApi);

export default router;
