import { Router } from 'express';
import culinaryRouter from './culinary';
import newRouter from './new';

const router = Router();

router.use(
    /**
     * #swagger.tags = ["Home - 首頁"]
     */
    newRouter
);

router.use(
    /**
     * #swagger.tags = ["Home - 首頁"]
     */
    culinaryRouter
);

export default router;
