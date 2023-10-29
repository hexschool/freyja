import { Router } from 'express';
import { isAuth } from '@/middlewares';
import culinaryRouter from './culinary';
import newRouter from './new';
import roomsRouter from './rooms';

const router = Router();

router.use(isAuth);

router.use(
    /**
     * #swagger.tags = ['Admin/News - 最新消息管理']
     */
    newRouter
);

router.use(
    /**
     * #swagger.tags = ['Admin/Culinary - 美味佳餚管理']
     */
    culinaryRouter
);

router.use(
    /**
     * #swagger.tags = ['Admin/Rooms - 房型管理']
     */
    roomsRouter
);

export default router;
