import { Router } from 'express';
import culinaryRouter from './culinary';
import newRouter from './new';

const router = Router();

router.use(newRouter);

router.use(culinaryRouter);

export default router;
