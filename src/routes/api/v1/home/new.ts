import { Router } from 'express';
import * as NewController from '@/controllers/new';

const router = Router();

router.get(
    /**
     * #swagger.description  = "取得所有最新消息"
     */
    '/news',
    NewController.getNewList
);

router.get(
    /**
     * #swagger.description  = "取得單筆最新消息"
     */
    '/news/:id',
    NewController.getNewById
);

export default router;
