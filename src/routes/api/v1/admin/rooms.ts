import { Router } from 'express';
import * as RoomController from '@/controllers/room';

const router = Router();

router.get(
    /**
     * #swagger.description  = "取得房型列表"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": [
                    { $ref: '#/definitions/RoomResponses' }
                ]
            }
        }
     */
    '/',
    RoomController.getRoomList
);

router.post(
    /**
     * #swagger.description  = "新增房型"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: { $ref: '#/definitions/RoomBody' }
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": { $ref: '#/definitions/RoomResponses' }
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "new validation failed: price: price 未填寫",
            }
        }
     */
    '/',
    RoomController.createOneRoom
);

router.put(
    /**
     * #swagger.description  = "修改房型"
     * #swagger.parameters['body'] = {
            in: 'body',
            schema: { $ref: '#/definitions/RoomBody' }
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": { $ref: '#/definitions/RoomResponses' }
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "new validation failed: price: price 未填寫",
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此房型不存在",
            }
        }
     */
    '/:id',
    RoomController.updateRoomById
);

router.delete(
    /**
     * #swagger.description  = "刪除房型"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": { $ref: '#/definitions/RoomResponses' }
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此房型不存在",
            }
        }
     */
    '/:id',
    RoomController.deleteRoomById
);

export default router;
