import { Router } from 'express';
import culinaryRouter from './culinary';
import newRouter from './new';

const router = Router();

router.use(
    /**
     * #swagger.tags = ["Home/News - 最新消息"]
     */
    newRouter
);

router.use(
    /**
     * #swagger.tags = ["Home/Culinary - 美味佳餚"]
     */
    culinaryRouter
);

export default router;
