import { createRouter } from '@/utils';
import * as VerifyController from '@/controllers/verify';

const router = createRouter();

router.get('/:email', VerifyController.checkEmailExists, () => {
    /**
     * #swagger.tags = ["Verify - 驗證"]
     * #swagger.description  = "驗證信箱是否註冊過"
     */
});

export default router;
