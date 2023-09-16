import * as UserController from '@/controllers/user';
import { checkRequestBodyValidator, isAuth } from '@/middlewares';
import { createRouter } from '@/utils';

// ## Users（使用者）

// - [Post] /api/v1/user/signup - 註冊
// - [Post] /api/v1/user/login - 登入
// - [Post] /api/v1/user/forgot - 忘記密碼
// - [Get] /api/v1/user/check - 檢查是否登入
// - [Get] /api/v1/user - 取得會員資料
// - [Put] /api/v1/user - 更新會員資料

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

router.post('/forgot', isAuth, UserController.resetPassword, () => {
    /**
     * #swagger.tags = ["Users - 使用者"]
     * #swagger.description  = "忘記密碼"
     */
});

router.put('/updateProfile', isAuth, UserController.updateProfile, () => {
    /**
     * #swagger.tags = ["Users - 使用者"]
     * #swagger.description  = "更新使用者資訊"
     */
});

router.get('/check', isAuth, UserController.check, () => {
    /**
     * #swagger.tags = ["Users - 使用者"]
     * #swagger.description  = "驗證登入"
     */
});

export default router;
