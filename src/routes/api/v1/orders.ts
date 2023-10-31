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
                    {
                        "userInfo": {
                            "address": {
                                "zipcode": 802,
                                "detail": "文山路23號"
                            },
                            "name": "Joanne Chen",
                            "phone": "0912345678",
                            "email": "example@gmail.com"
                        },
                        "_id": "653e335a13831c2ac8c389bb",
                        "roomId": {
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
                        },
                        "checkInDate": "2023-06-17T16:00:00.000Z",
                        "checkOutDate": "2023-06-18T16:00:00.000Z",
                        "peopleNum": 2,
                        "orderUserId": "6533f0ef4cdf5b7f762747b0",
                        "status": 0,
                        "createdAt": "2023-10-29T10:26:34.498Z",
                        "updatedAt": "2023-10-29T10:26:34.498Z"
                    }
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
                "result": {
                    "userInfo": {
                        "address": {
                            "zipcode": 802,
                            "detail": "文山路23號"
                        },
                        "name": "Joanne Chen",
                        "phone": "0912345678",
                        "email": "example@gmail.com"
                    },
                    "_id": "653e335a13831c2ac8c389bb",
                    "roomId": {
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
                    },
                    "checkInDate": "2023-06-17T16:00:00.000Z",
                    "checkOutDate": "2023-06-18T16:00:00.000Z",
                    "peopleNum": 2,
                    "orderUserId": "6533f0ef4cdf5b7f762747b0",
                    "status": 0,
                    "createdAt": "2023-10-29T10:26:34.498Z",
                    "updatedAt": "2023-10-29T10:26:34.498Z"
                }
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
            schema: {
                roomId: "65251f6095429cd58654bf12",
                checkInDate: "2023/06/18",
                checkOutDate: "2023/06/19",
                peopleNum: 2,
                userInfo: {
                    name: "Joanne Chen",
                    phone: "0912345678",
                    email: "example@gmail.com",
                    address: {
                        zipcode: 802,
                        detail: "文山路23號",
                    },
                },
            }
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "roomId": {
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
                    },
                    "checkInDate": "2023-06-17T16:00:00.000Z",
                    "checkOutDate": "2023-06-18T16:00:00.000Z",
                    "peopleNum": 2,
                    "orderUserId": "6533f0ef4cdf5b7f762747b0",
                    "userInfo": {
                        "name": "Joanne Chen",
                        "phone": "0912345678",
                        "email": "example@gmail.com",
                        "address": {
                            "zipcode": 802,
                            "detail": "文山路23號"
                        }
                    },
                    "status": 0,
                    "_id": "653e335a13831c2ac8c389bb",
                    "createdAt": "2023-10-29T10:26:34.498Z",
                    "updatedAt": "2023-10-29T10:26:34.498Z"
                }
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
                "result": {
                    "userInfo": {
                        "address": {
                            "zipcode": 802,
                            "detail": "文山路23號"
                        },
                        "name": "Joanne Chen",
                        "phone": "0912345678",
                        "email": "example@gmail.com"
                    },
                    "_id": "653e335a13831c2ac8c389bb",
                    "roomId": {
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
                    },
                    "checkInDate": "2023-06-17T16:00:00.000Z",
                    "checkOutDate": "2023-06-18T16:00:00.000Z",
                    "peopleNum": 2,
                    "orderUserId": "6533f0ef4cdf5b7f762747b0",
                    "status": -1,
                    "createdAt": "2023-10-29T10:26:34.498Z",
                    "updatedAt": "2023-10-29T10:26:34.498Z"
                }
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
