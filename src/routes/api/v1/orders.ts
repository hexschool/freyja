import { createRouter } from '@/utils';
import * as OrderController from '@/controllers/order';
import { checkOrder, isAuth } from '@/middlewares';

const router = createRouter();

router.use(isAuth);

router.get('/orders', OrderController.getOrderList, () => {
    /**
     * #swagger.tags = ["Orders - 訂單"]
     * #swagger.description  = "訂單列表"
     */
});

router.get('/orders/:id', OrderController.getOrderById, () => {
    /**
     * #swagger.tags = ["Orders - 訂單"]
     * #swagger.description  = "訂單詳細資料"
     */
});

router.post('/orders', checkOrder, OrderController.createOneOrder, () => {
    /**
     * #swagger.tags = ["Orders - 訂單"]
     * #swagger.description  = "新增訂單"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                roomId: "65251f6095429cd58654bf12",
                checkInDate: "2023/06/18",
                checkOutDate: "2023/06/19",
                peopleNum: 2,
                userInfo: {
                    name: "Joanne Chen",
                    phone: "0912345678",
                    email: "example@gmail.com",
                    address: {
                        zipcode: 802,
                        detail: "文山路23號",
                    },
                },
            }
        }
     */
});

router.put('/orders/:id', checkOrder, OrderController.updateOrderById, () => {
    /**
     * #swagger.tags = ["Orders - 訂單"]
     * #swagger.description  = "修改訂單"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                roomId: "65251f6095429cd58654bf12",
                checkInDate: "2023/06/18",
                checkOutDate: "2023/06/19",
                peopleNum: 2,
                userInfo: {
                    name: "Joanne Chen",
                    phone: "0912345678",
                    email: "example@gmail.com",
                    address: {
                        zipcode: 802,
                        detail: "文山路23號",
                    },
                },
            }
        }
     */
});

router.delete('/orders/:id', OrderController.deleteOrderById, () => {
    /**
     * #swagger.tags = ["Orders - 訂單"]
     * #swagger.description  = "取消訂單"
     */
});

export default router;
