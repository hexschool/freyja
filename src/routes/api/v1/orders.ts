import { Router } from 'express';
import * as OrderController from '@/controllers/order';
import { checkOrder, isAuth } from '@/middlewares';

const router = Router();

router.use(isAuth);

router.get(
    /**
     * #swagger.description  = "取得自己的訂單列表"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": [
                    { $ref: '#/definitions/OrderResponses' },
                ]
            }
        }
     */
    '/',
    OrderController.getUserOrderList
);

router.get(
    /**
     * #swagger.description  = "取得訂單詳細資料"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": { $ref: '#/definitions/OrderResponses' },
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此訂單不存在",
            }
        }
     */
    '/:id',
    OrderController.getOrderById
);

router.post(
    /**
     * #swagger.description  = "新增訂單"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: { $ref: '#/definitions/OrderBody' },
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": { $ref: '#/definitions/OrderResponses' },
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "checkInDate 格式錯誤",
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此房型不存在",
            }
        }
     */
    '/',
    checkOrder,
    OrderController.createOneOrder
);

router.delete(
    /**
     * #swagger.description  = "取消訂單"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": { $ref: '#/definitions/OrderResponses' },
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此訂單不存在",
            }
        }
     */
    '/:id',
    OrderController.deleteOrderByUser
);

export default router;
