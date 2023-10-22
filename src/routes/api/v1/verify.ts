import { Router } from 'express';
import * as VerifyController from '@/controllers/verify';
import { checkRequestBodyValidator } from '@/middlewares';

const router = Router();

router.get(
    /**
     * #swagger.description  = "驗證信箱是否註冊過"
     */
    '/:email',
    VerifyController.checkEmailExists
);

router.post(
    /**
     * #swagger.description  = "產生信箱驗證碼"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                email: "timmothy.ramos@example.com",
            }
        }
     */
    '/generateEmailCode',
    checkRequestBodyValidator,
    VerifyController.sendVerificationCode
);

export default router;
