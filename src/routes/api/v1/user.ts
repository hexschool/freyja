import { Router } from 'express';
import * as UserController from '@/controllers/user';
import { checkRequestBodyValidator, isAuth } from '@/middlewares';

const router = Router();

router.use(checkRequestBodyValidator);

router.post(
    /**
     * #swagger.description  = "登入"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                email: "timmothy.ramos@example.com",
                password: "Dirt5528295",
            }
        }
     * #swagger.responses[200] = {
            description: '登入成功',
            schema: {
                "status": true,
                "token": "eyJhbGciOiJI....",
                "result": {
                    "address": {
                        "zipcode": 802,
                        "detail": "文山路23號",
                        "county": "高雄市",
                        "city": "苓雅區"
                    },
                    "_id": "6533f0ef4cdf5b7f762747b0",
                    "name": "Lori Murphy",
                    "email": "timmothy.ramos@example.com",
                    "phone": "(663) 742-3828",
                    "birthday": "1982-02-03T16:00:00.000Z",
                    "createdAt": "2023-10-21T15:40:31.526Z",
                    "updatedAt": "2023-10-21T15:40:31.526Z",
                    "id": "6533f0ef4cdf5b7f762747b0"
                }
            }
        }
     * #swagger.responses[400] = {
            description: '登入失敗',
            schema: {
                "status": false,
                "message": "密碼錯誤",
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此使用者不存在",
            }
        }
     */
    '/login',
    UserController.login
);

router.post(
    /**
     * #swagger.description  = "註冊"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                name: "Lori Murphy",
                email: "lori.murphy@example.com",
                password: "密碼",
                phone: "(663) 742-3828",
                birthday: "1982/2/4",
                address: {
                    zipcode: 802,
                    detail: "文山路23號",
                },
            }
        }
     * #swagger.responses[200] = {
            description: '註冊成功',
            schema: {
                "status": true,
                "token": "eyJhbGciOiJI....",
                "result": {
                    "address": {
                        "zipcode": 802,
                        "detail": "文山路23號",
                        "county": "高雄市",
                        "city": "苓雅區"
                    },
                    "_id": "6533f0ef4cdf5b7f762747b0",
                    "name": "Lori Murphy",
                    "email": "timmothy.ramos@example.com",
                    "phone": "(663) 742-3828",
                    "birthday": "1982-02-03T16:00:00.000Z",
                    "createdAt": "2023-10-21T15:40:31.526Z",
                    "updatedAt": "2023-10-21T15:40:31.526Z",
                    "id": "6533f0ef4cdf5b7f762747b0"
                }
            }
        }
     * #swagger.responses[400] = {
            description: '註冊失敗',
            schema: {
                "status": false,
                "message": "此 Email 已註冊",
            }
        }
     */
    '/signup',
    UserController.signup
);

router.post(
    /**
     * #swagger.description  = "忘記密碼"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                email: "timmothy.ramos@example.com",
                code: "0Zvjde",
                newPassword: "Dirt5528295",
            }
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此使用者不存在",
            }
        }
     */
    '/forgot',
    UserController.forget
);

router.get(
    /**
     * #swagger.description  = "檢查是否登入"
     * #swagger.responses[200] = {
            description: '登入成功',
            schema: {
                "status": true,
                "token": "eyJhbGciOiJI....",
            }
        }
     */
    '/check',
    isAuth,
    UserController.check
);

router.get(
    /**
     * #swagger.description  = "取得使用者資訊"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "token": "eyJhbGciOiJI....",
                "result": {
                    "address": {
                        "zipcode": 802,
                        "detail": "文山路23號",
                        "county": "高雄市",
                        "city": "苓雅區"
                    },
                    "_id": "6533f0ef4cdf5b7f762747b0",
                    "name": "Lori Murphy",
                    "email": "timmothy.ramos@example.com",
                    "phone": "(663) 742-3828",
                    "birthday": "1982-02-03T16:00:00.000Z",
                    "createdAt": "2023-10-21T15:40:31.526Z",
                    "updatedAt": "2023-10-21T15:40:31.526Z",
                    "id": "6533f0ef4cdf5b7f762747b0"
                }
            }
        }
     */
    '/',
    isAuth,
    UserController.getInfo
);

router.put(
    /**
     * #swagger.description  = "更新使用者資訊"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                userId: "6523e9fc3a22dd8d8207ef80",
                name: "Kylie Stanley",
                phone: "(937) 233-2482",
                birthday: "1948/6/5",
                address: {
                    zipcode: 802,
                    detail: "文山路23號",
                },
                oldPassword: "舊密碼",
                newPassword: "新密碼",
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "密碼錯誤",
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此使用者不存在",
            }
        }
     */
    '/',
    isAuth,
    UserController.updateInfo
);

export default router;
