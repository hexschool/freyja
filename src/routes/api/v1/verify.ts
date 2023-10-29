import { Router } from 'express';
import * as VerifyController from '@/controllers/verify';
import { checkRequestBodyValidator } from '@/middlewares';

const router = Router();

router.post(
    /**
     * #swagger.description  = "驗證信箱是否註冊過"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                email: "timmothy.ramos@example.com",
            }
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "isEmailExists": true
                }
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "Email 格式不正確",
            }
        }
     */
    '/email',
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
     * #swagger.responses[200] = {
            schema: {
                "status": true,
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "Email 格式不正確",
            }
        }
     */
    '/generateEmailCode',
    checkRequestBodyValidator,
    VerifyController.sendVerificationCode
);

export default router;
