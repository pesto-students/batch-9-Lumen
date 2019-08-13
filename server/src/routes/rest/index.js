const Router = require('express').Router;
import v1ApiController from './v1';

let router = Router();
router.use('/v1', v1ApiController);

export default router;