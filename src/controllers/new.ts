import type { RequestHandler } from 'express';
import NewsModel from '@/models/new';

export const getNewList: RequestHandler = async (_req, res) => {
    const result = await NewsModel.find();

    res.send({
        status: true,
        result
    });
};

export const getNewById: RequestHandler = async (req, res) => {
    const result = await NewsModel.findById(req.params.newId);
    if (!result) {
        throw new Error('此最新消息不存在!');
    }

    res.send({
        status: true,
        result
    });
};
