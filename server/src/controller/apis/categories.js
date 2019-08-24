import { Router } from 'express';

import HomeAPI from '../../services/home/api';

const router = Router();

router.get('/', HomeAPI.getCategories);

export default router;
