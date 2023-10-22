import { Router } from 'express';
import * as OrderController from '@/controllers/order';
import { checkOrder, isAuth } from '@/middlewares';

const router = Router();

router.use(isAuth);

router.get(
    /**
     * #swagger.description  = "使用者訂單列表"
     */
    '/orders',
    OrderController.getUserOrderList
);

router.get(
    /**
     * #swagger.description  = "訂單詳細資料"
     */
    '/orders/:id',
    OrderController.getOrderById
);

router.post(
    /**
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
    '/orders',
    checkOrder,
    OrderController.createOneOrder
);

router.put(
    /**
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
    '/orders/:id',
    checkOrder,
    OrderController.updateOrderById
);

router.delete(
    /**
     * #swagger.description  = "取消訂單"
     */
    '/orders/:id',
    OrderController.deleteOrderById
);

export default router;
