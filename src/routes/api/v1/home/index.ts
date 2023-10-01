import { createRouter } from '@/utils';
import culinaryRouter from './culinary';
import newRouter from './new';

const router = createRouter();

router.use(newRouter);

router.use(culinaryRouter);

export default router;
