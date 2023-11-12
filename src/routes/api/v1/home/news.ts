import { Router } from 'express';
import * as NewController from '@/controllers/new';

const router = Router();

router.get(
    /**
     * #swagger.description  = "取得所有最新消息"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": [
                    { $ref: '#/definitions/NewsResponses' },
                ]
            }
        }
     */
    '/',
    NewController.getNewList
);

router.get(
    /**
     * #swagger.description  = "取得單筆最新消息"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": { $ref: '#/definitions/NewsResponses' },
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此最新消息不存在",
            }
        }
     */
    '/:id',
    NewController.getNewById
);

export default router;
