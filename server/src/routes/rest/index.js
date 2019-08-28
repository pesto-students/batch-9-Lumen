import v1ApiController from './v1';

const { Router } = require('express');

const router = Router();
router.use('/v1', v1ApiController);
export default router;
