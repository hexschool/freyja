import type { RequestHandler } from 'express';
import OrderModel from '@/models/order';

export const getOrderList: RequestHandler = async (_req, res) => {
    const result = await OrderModel.find();

    res.send({
        status: true,
        result
    });
};

export const createOneOrder: RequestHandler = async (req, res) => {
    const { roomInfo, userInfo } = req.body;

    const result = await OrderModel.create({
        ...req.body,
        roomInfo,
        userInfo
    });

    res.send({
        status: true,
        result
    });
};

export const getOrderById: RequestHandler = async (req, res) => {
    const result = await OrderModel.findById(req.params.orderId);
    if (!result) {
        throw new Error('此訂單不存在!');
    }

    res.send({
        status: true,
        result
    });
};

export const deleteOrderById: RequestHandler = async (req, res) => {
    const result = OrderModel.findByIdAndRemove(req.params.orderId);
    if (!result) {
        throw new Error('此訂單不存在!');
    }

    res.send({
        status: true
    });
};
