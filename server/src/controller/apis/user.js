
import userAPI from '../../services/user/user';

const { Router } = require('express');

const router = Router();

router.get('/', userAPI.testApi);

router.post('/signup', userAPI.testApi);

export default router;
