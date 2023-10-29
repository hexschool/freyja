import { Router } from 'express';
import { isAuth } from '@/middlewares';
import culinaryRouter from './culinary';
import newsRouter from './news';
import ordersRouter from './orders';
import roomsRouter from './rooms';

const router = Router();

router.use(isAuth);

router.use(
    /**
     * #swagger.tags = ['Admin/News - 最新消息管理']
     */
    '/news',
    newsRouter
);

router.use(
    /**
     * #swagger.tags = ['Admin/Culinary - 美味佳餚管理']
     */
    '/culinary',
    culinaryRouter
);

router.use(
    /**
     * #swagger.tags = ['Admin/Rooms - 房型管理']
     */
    '/rooms',
    roomsRouter
);

router.use(
    /**
     * #swagger.tags = ['Admin/Orders - 訂單管理']
     */
    '/orders',
    ordersRouter
);

export default router;
