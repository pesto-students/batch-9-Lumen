
import userAPI from '../../services/user/user';
import passport from '../../configs/passport';

const { Router } = require('express');

const router = Router();

router.get('/', userAPI.testApi);

router.post('/signup', passport.passport.authenticate('local-signup'), userAPI.signUp);

router.post('/signin', passport.passport.authenticate('local-signup'), userAPI.signUp);

export default router;
