
import userAPI from '../../services/user/api';
import { Router } from 'express';

const router = Router();

router.get('/health', userAPI.health);

export default router;
