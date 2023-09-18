import { createRouter } from '@/utils';
import * as OrderController from '@/controllers/order';

const router = createRouter();

router.get('/orders', OrderController.getOrderList, () => {
    /**
     * #swagger.tags = ["Orders - 訂單"]
     * #swagger.description  = "訂單列表"
     */
});

router.get('/orders/:orderId', OrderController.getOrderById, () => {
    /**
     * #swagger.tags = ["Orders - 訂單"]
     * #swagger.description  = "訂單詳細資料"
     */
});

router.post('/orders/:orderId', OrderController.createOneOrder, () => {
    /**
     * #swagger.tags = ["Orders - 訂單"]
     * #swagger.description  = "訂單詳細資料"
     */
});

router.delete('/orders/:orderId', OrderController.deleteOrderById, () => {
    /**
     * #swagger.tags = ["Orders - 訂單"]
     * #swagger.description  = "取消訂單"
     */
});

export default router;
