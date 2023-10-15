import { createRouter } from '@/utils';
import * as VerifyController from '@/controllers/verify';
import { checkRequestBodyValidator } from '@/middlewares';

const router = createRouter();

router.get('/:email', VerifyController.checkEmailExists, () => {
    /**
     * #swagger.tags = ["Verify - 驗證"]
     * #swagger.description  = "驗證信箱是否註冊過"
     */
});

router.post('/generateEmailCode', checkRequestBodyValidator, VerifyController.sendVerificationCode, () => {
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
});

export default router;
