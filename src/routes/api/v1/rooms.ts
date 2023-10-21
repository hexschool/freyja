import { Router } from 'express';
import * as RoomController from '@/controllers/room';
import { isAuth } from '@/middlewares';

const router = Router();

router.get('/rooms', RoomController.getRoomList, () => {
    /**
     * #swagger.tags = ["Rooms - 房型"]
     * #swagger.description  = "房型列表"
     */
});

router.get('/rooms/:id', RoomController.getRoomById, () => {
    /**
     * #swagger.tags = ["Rooms - 房型"]
     * #swagger.description  = "房型詳細資料"
     */
});

router.post('/rooms', isAuth, RoomController.createOneRoom, () => {
    /**
     * #swagger.tags = ["Rooms - 房型"]
     * #swagger.description  = "新增房型"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                name: "尊爵雙人房",
                description: "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
                content: "私人衛浴 • 市景 • 免費盥洗用品 • 淋浴間 • 空調 • 毛巾 • 床單 • 床邊插座....",
                imageUrl: "https://fakeimg.pl/300/",
                imageUrlList: [
                    "https://fakeimg.pl/300/",
                    "https://fakeimg.pl/300/",
                    "https://fakeimg.pl/300/",
                ],
                areaInfo: "24坪",
                bedInfo: "一張大床",
                maxPeople: 4,
                price: 10000,
            }
        }
     */
});

router.put('/rooms/:id', isAuth, RoomController.updateRoomById, () => {
    /**
     * #swagger.tags = ["Rooms - 房型"]
     * #swagger.description  = "修改房型"
     * #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                name: "景觀雙人房",
                description: "景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。",
                content: "私人衛浴 • 市景 • 免費盥洗用品 • 淋浴間 • 空調 • 毛巾 • 床單 • 床邊插座....",
                imageUrl: "https://fakeimg.pl/300/",
                imageUrlList: [
                    "https://fakeimg.pl/300/",
                    "https://fakeimg.pl/300/",
                    "https://fakeimg.pl/300/",
                ],
                areaInfo: "28坪",
                bedInfo: "兩張大床",
                maxPeople: 4,
                price: 18000,
            }
        }
     */
});

router.delete('/rooms/:id', isAuth, RoomController.deleteRoomById, () => {
    /**
     * #swagger.tags = ["Rooms - 房型"]
     * #swagger.description  = "刪除房型"
     */
});

export default router;
