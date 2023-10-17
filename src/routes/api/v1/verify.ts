import { Router } from 'express';
import * as VerifyController from '@/controllers/verify';
import { checkRequestBodyValidator } from '@/middlewares';
import { catchAsync } from '@/utils';

const router = Router();

router.get('/:email', catchAsync(VerifyController.checkEmailExists), () => {
    /**
     * #swagger.tags = ["Verify - 驗證"]
     * #swagger.description  = "驗證信箱是否註冊過"
     */
});

router.post(
    '/generateEmailCode',
    catchAsync(checkRequestBodyValidator),
    catchAsync(VerifyController.sendVerificationCode),
    () => {
        /**
     * #swagger.tags = ["Verify - 驗證"]
     * #swagger.description  = "產生信箱驗證碼"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                email: "timmothy.ramos@example.com",
            }
        }
     */
    }
);

export default router;
