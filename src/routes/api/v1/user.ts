import * as UserController from '@/controllers/user';
import { checkRequestBodyValidator, isAuth } from '@/middlewares';
import { createRouter } from '@/utils';

const router = createRouter();

router.use(checkRequestBodyValidator);

router.post('/login', UserController.login, () => {
    /**
     * #swagger.tags = ["Users - 使用者"]
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
});

router.post('/signup', UserController.signup, () => {
    /**
     * #swagger.tags = ["Users - 使用者"]
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
});

router.post('/forgot', UserController.forget, () => {
    /**
     * #swagger.tags = ["Users - 使用者"]
     * #swagger.description  = "忘記密碼"
     */
});

router.get('/check', isAuth, UserController.check, () => {
    /**
     * #swagger.tags = ["Users - 使用者"]
     * #swagger.description  = "檢查是否登入"
     */
});

router.get('/', isAuth, UserController.getInfo, () => {
    /**
     * #swagger.tags = ["Users - 使用者"]
     * #swagger.description  = "取得使用者資訊"
     */
});

router.put('/', isAuth, UserController.updateInfo, () => {
    /**
     * #swagger.tags = ["Users - 使用者"]
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
});

export default router;
