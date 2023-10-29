import { Router } from 'express';
import { isAuth } from '@/middlewares';
import culinaryRouter from './culinary';
import newRouter from './new';
import roomsRouter from './rooms';

const router = Router();

router.use(isAuth);

router.use(
    /**
     * #swagger.tags = ["Admin - 管理員"]
     */
    newRouter
);

router.use(
    /**
     * #swagger.tags = ["Admin - 管理員"]
     */
    culinaryRouter
);

router.use(
    /**
     * #swagger.tags = ["Admin - 管理員"]
     */
    roomsRouter
);

export default router;
