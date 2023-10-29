import type { RequestHandler } from 'express';
import OrderModel from '@/models/order';

export const getUserOrderList: RequestHandler = async (req, res, next) => {
    try {
        const result = await OrderModel.find({
            orderUserId: req.user?._id
        }).populate({
            path: 'roomId'
        });

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const getOrderById: RequestHandler = async (req, res, next) => {
    try {
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
    } catch (error) {
        next(error);
    }
};

export const createOneOrder: RequestHandler = async (req, res, next) => {
    try {
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
    } catch (error) {
        next(error);
    }
};

export const updateOrderById: RequestHandler = async (req, res, next) => {
    try {
        const { roomId, checkInDate, checkOutDate, peopleNum, userInfo } = req.body;

        const result = await OrderModel.findOneAndUpdate(
            {
                _id: req.params.id,
                orderUserId: req.user?._id
            },
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
            path: 'roomId'
        });
        if (!result) {
            throw new Error('此訂單不存在!');
        }

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const deleteOrderById: RequestHandler = async (req, res, next) => {
    try {
        const result = await OrderModel.findOneAndUpdate(
            {
                _id: req.params.id,
                orderUserId: req.user?._id
            },
            {
                status: -1
            },
            {
                new: true,
                runValidators: true
            }
        ).populate({
            path: 'roomId'
        });
        if (!result) {
            throw new Error('此訂單不存在!');
        }

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};
