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
                    {
                        "_id": "65251f6095429cd58654bf12",
                        "name": "尊爵雙人房",
                        "description": "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
                        "content": "私人衛浴 • 市景 • 免費盥洗用品 • 淋浴間 • 空調 • 毛巾 • 床單 • 床邊插座....",
                        "imageUrl": "https://fakeimg.pl/300/",
                        "imageUrlList": [
                            "https://fakeimg.pl/300/",
                            "https://fakeimg.pl/300/",
                            "https://fakeimg.pl/300/"
                        ],
                        "areaInfo": "24坪",
                        "bedInfo": "一張大床",
                        "maxPeople": 4,
                        "price": 10000,
                        "createdAt": "2023-10-10T09:54:40.063Z",
                        "updatedAt": "2023-10-10T09:54:40.063Z"
                    }
                ]
            }
        }
     */
    '/',
    RoomController.getRoomList
);

router.get(
    /**
     * #swagger.description  = "取得房型詳細資料"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "_id": "65251f6095429cd58654bf12",
                    "name": "尊爵雙人房",
                    "description": "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
                    "content": "私人衛浴 • 市景 • 免費盥洗用品 • 淋浴間 • 空調 • 毛巾 • 床單 • 床邊插座....",
                    "imageUrl": "https://fakeimg.pl/300/",
                    "imageUrlList": [
                        "https://fakeimg.pl/300/",
                        "https://fakeimg.pl/300/",
                        "https://fakeimg.pl/300/"
                    ],
                    "areaInfo": "24坪",
                    "bedInfo": "一張大床",
                    "maxPeople": 4,
                    "price": 10000,
                    "createdAt": "2023-10-10T09:54:40.063Z",
                    "updatedAt": "2023-10-10T09:54:40.063Z"
                }
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
    RoomController.getRoomById
);

export default router;
