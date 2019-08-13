
const Router = require('express').Router;
import { testApi } from '../../services/user/user';

let router = Router();

router.get('/', testApi);

export default router;