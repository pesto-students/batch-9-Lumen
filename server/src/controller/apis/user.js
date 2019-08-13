import { Router } from 'express';
import userService from '../../services/user/user';

let router = Router();

router.get('/', userService.getUsers);

module.exports = router;