import type { RequestHandler } from 'express';
import OrderModel from '@/models/order';

export const getOrderList: RequestHandler = async (_req, res) => {
    const result = await OrderModel.find().populate({
        path: 'roomId'
    });

    res.send({
        status: true,
        result
    });
};

export const getOrderById: RequestHandler = async (req, res) => {
    const result = await OrderModel.findById(req.params.id).populate({
        path: 'roomId'
    });
    if (!result) {
        throw new Error('此訂單不存在!');
    }

    res.send({
        status: true,
        result
    });
};

export const createOneOrder: RequestHandler = async (req, res) => {
    const { roomId, checkInDate, checkOutDate, peopleNum, userInfo } = req.body;

    const result = await OrderModel.create({
        roomId,
        orderUserId: req.user?._id,
        checkInDate,
        checkOutDate,
        peopleNum,
        userInfo
    });

    res.send({
        status: true,
        result
    });
};

export const updateOrderById: RequestHandler = async (req, res) => {
    const { roomId, checkInDate, checkOutDate, peopleNum, userInfo } = req.body;

    const result = await OrderModel.findByIdAndUpdate(
        req.params.id,
        {
            roomId,
            checkInDate,
            checkOutDate,
            peopleNum,
            userInfo
        },
        {
            new: true,
            runValidators: true
        }
    ).populate({
        path: 'room'
    });
    if (!result) {
        throw new Error('此訂單不存在!');
    }

    res.send({
        status: true,
        result
    });
};

export const deleteOrderById: RequestHandler = async (req, res) => {
    const result = OrderModel.findByIdAndRemove(req.params.id);
    if (!result) {
        throw new Error('此訂單不存在!');
    }

    res.send({
        status: true,
        result
    });
};
