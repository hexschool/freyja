import { Router } from 'express';
import * as CulinaryController from '@/controllers/culinary';

const router = Router();

router.get(
    /**
     * #swagger.description  = "取得所有美味佳餚"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": [
                    { $ref: '#/definitions/CulinaryResponses' },
                ]
            }
        }
     */
    '/',
    CulinaryController.getCulinaryList
);

router.get(
    /**
     * #swagger.description  = "取得單筆美味佳餚"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": { $ref: '#/definitions/CulinaryResponses' },
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此美味佳餚不存在",
            }
        }
     */
    '/:id',
    CulinaryController.getCulinaryById
);

export default router;
