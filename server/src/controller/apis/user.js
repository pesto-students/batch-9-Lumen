
import { Router } from 'express';
import authInstance from '../../configs/authentication';
import userAPI from '../../services/user/api';
import { signUpFieldsValid, signInFieldsValid } from '../../middlewares/user';

const router = Router();

router.get('/health', userAPI.health);

router.post('/signup', signUpFieldsValid, authInstance.localSignUp(), userAPI.signUp);

router.post('/signin', signInFieldsValid, authInstance.localSignIn(), userAPI.signIn);

export default router;
