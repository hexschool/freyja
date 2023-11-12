import { Router } from 'express';
import * as OrderController from '@/controllers/order';
import { checkOrder } from '@/middlewares';

const router = Router();

router.get(
    /**
     * #swagger.description  = "取得所有訂單列表"
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
    OrderController.getAllOrderList
);

router.put(
    /**
     * #swagger.description  = "修改訂單"
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
                "message": "此訂單不存在",
            }
        }
     */
    '/:id',
    checkOrder,
    OrderController.updateOrderById
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
    OrderController.deleteOrderByAdmin
);

export default router;
