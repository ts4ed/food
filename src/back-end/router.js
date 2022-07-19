import { Router } from 'express';
import PostControler from './PostControler.js';
import OrderControler from './OrderControler.js';

const router = new Router();

router.post('/posts', PostControler.create);
router.get('/posts', PostControler.getAll);
router.post('/orders', OrderControler.create);
router.get('/orders', OrderControler.getAll);

export default router;
