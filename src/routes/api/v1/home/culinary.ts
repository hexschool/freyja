import { Router } from 'express';
import * as CulinaryController from '@/controllers/culinary';

const router = Router();

router.get(
    /**
     * #swagger.description  = "取得所有美味佳餚"
     */
    '/culinary',
    CulinaryController.getCulinaryList
);

router.get(
    /**
     * #swagger.description  = "取得單筆美味佳餚"
     */
    '/culinary/:id',
    CulinaryController.getCulinaryById
);

export default router;
