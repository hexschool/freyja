import { createRouter } from '@/utils';
import * as RoomController from '@/controllers/room';

const router = createRouter();

router.get('/rooms', RoomController.getRoomList, () => {
    /**
     * #swagger.tags = ["Rooms - 房型"]
     * #swagger.description  = "房型列表"
     */
});

router.get('/rooms/:roomId', RoomController.getRoomById, () => {
    /**
     * #swagger.tags = ["Rooms - 房型"]
     * #swagger.description  = "房型詳細資料"
     */
});

export default router;
