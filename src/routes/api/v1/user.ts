import * as UserController from '@/controllers/user';
import { checkRequestBodyValidator, isAuth } from '@/middlewares';
import { createRouter } from '@/utils';

const router = createRouter();

router.use(checkRequestBodyValidator);

router.post('/login', UserController.login, () => {
    /**
     * #swagger.tags = ["Users - 使用者"]
     * #swagger.description  = "登入"
     */
});

router.post('/signup', UserController.signup, () => {
    /**
     * #swagger.tags = ["Users - 使用者"]
     * #swagger.description  = "註冊"
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
     */
});

export default router;
