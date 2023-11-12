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

router.post(
    /**
     * #swagger.description  = "新增最新消息"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: { $ref: '#/definitions/NewsBody' },
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": { $ref: '#/definitions/NewsResponses' },
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "new validation failed: title: title 未填寫",
            }
        }
     */
    '/',
    NewController.createOneNew
);

router.put(
    /**
     * #swagger.description  = "修改最新消息"
     * #swagger.parameters['body'] = {
            in: 'body',
            schema: { $ref: '#/definitions/NewsBody' },
        }
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
    NewController.updateNewById
);

router.delete(
    /**
     * #swagger.description  = "刪除最新消息"
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
    NewController.deleteNewById
);

export default router;
