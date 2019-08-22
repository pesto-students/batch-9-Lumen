import { Router } from 'express';
import homeAPI from '../../services/home/api';

const router = Router();

router.get('/health', homeAPI.health);

router.get('/:pageNumber', homeAPI.getBlogs);


export default router;
