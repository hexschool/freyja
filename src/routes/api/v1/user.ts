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
     */
    '/forgot',
    UserController.forget
);

router.get(
    /**
     * #swagger.description  = "檢查是否登入"
     */
    '/check',
    isAuth,
    UserController.check
);

router.get(
    /**
     * #swagger.description  = "取得使用者資訊"
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
     */
    '/',
    isAuth,
    UserController.updateInfo
);

export default router;
