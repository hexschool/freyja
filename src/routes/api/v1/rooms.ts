import { Router } from 'express';
import * as RoomController from '@/controllers/room';

const router = Router();

router.get(
    /**
     * #swagger.description  = "房型列表"
     */
    '/rooms',
    RoomController.getRoomList
);

router.get(
    /**

     * #swagger.description  = "房型詳細資料"
     */
    '/rooms/:id',
    RoomController.getRoomById
);

export default router;
