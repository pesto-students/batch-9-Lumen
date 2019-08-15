
import { Router } from 'express';
import authInstance from '../../configs/authentication';
import userAPI from '../../services/user/api';

const router = Router();

router.get('/health', userAPI.health);

router.post('/signup', authInstance.localSignUp(), userAPI.signUp);

router.post('/signin', authInstance.localSignIn(), userAPI.signIn);

export default router;
