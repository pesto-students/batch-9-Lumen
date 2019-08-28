import { Router } from 'express';
import {getBlog} from '../../middlewares/blogs';
import shareBlog from '../../services/blogs/render';

const router = Router();

router.get('/:id', getBlog, shareBlog);

export default router;