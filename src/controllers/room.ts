import type { RequestHandler } from 'express';
import RoomModel from '@/models/room';

export const getRoomList: RequestHandler = async (_req, res) => {
    const result = await RoomModel.find();

    res.send({
        status: true,
        result
    });
};

export const getRoomById: RequestHandler = async (req, res) => {
    const result = await RoomModel.findById(req.params.roomId);
    if (!result) {
        throw new Error('此房型不存在!');
    }

    res.send({
        status: true,
        result
    });
};
