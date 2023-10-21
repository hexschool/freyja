import type { RequestHandler } from 'express';
import RoomModel from '@/models/room';

export const getRoomList: RequestHandler = async (_req, res, next) => {
    try {
        const result = await RoomModel.find();

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const getRoomById: RequestHandler = async (req, res, next) => {
    try {
        const result = await RoomModel.findById(req.params.id);
        if (!result) {
            throw new Error('此房型不存在!');
        }

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const createOneRoom: RequestHandler = async (req, res, next) => {
    try {
        const { name, description, content, imageUrl, imageUrlList, areaInfo, bedInfo, maxPeople, price } = req.body;

        const result = await RoomModel.create({
            name,
            description,
            content,
            imageUrl,
            imageUrlList,
            areaInfo,
            bedInfo,
            maxPeople,
            price
        });

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const updateRoomById: RequestHandler = async (req, res, next) => {
    try {
        const { name, description, content, imageUrl, imageUrlList, areaInfo, bedInfo, maxPeople, price } = req.body;

        const result = await RoomModel.findByIdAndUpdate(
            req.params.id,
            {
                name,
                description,
                content,
                imageUrl,
                imageUrlList,
                areaInfo,
                bedInfo,
                maxPeople,
                price
            },
            {
                new: true,
                runValidators: true
            }
        );
        if (!result) {
            throw new Error('此房型不存在!');
        }

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const deleteRoomById: RequestHandler = async (req, res, next) => {
    try {
        const result = await RoomModel.findByIdAndRemove(req.params.id);
        if (!result) {
            throw new Error('此房型不存在!');
        }

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};
