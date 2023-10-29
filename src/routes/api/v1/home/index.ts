import { Router } from 'express';
import culinaryRouter from './culinary';
import newsRouter from './news';

const router = Router();

router.use(
    /**
     * #swagger.tags = ["Home/News - 最新消息"]
     */
    '/news',
    newsRouter
);

router.use(
    /**
     * #swagger.tags = ["Home/Culinary - 美味佳餚"]
     */
    '/culinary',
    culinaryRouter
);

export default router;
