import { Router } from 'express';
import {
  getBlog,
  forwardPublicBlog,
  forwardPrivateBlog,
  forwardDraftBlog
} from '../../middlewares/blogs';
import shareBlog from '../../services/blogs/render';

const router = Router();

router.get('/:id', getBlog, forwardPublicBlog, shareBlog);

router.get('/draft/:draftUrl/:id', getBlog, forwardDraftBlog, shareBlog);

router.get('/secured/:privateUrl/:id', getBlog, forwardPrivateBlog, shareBlog);

export default router;
