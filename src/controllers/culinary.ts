import type { RequestHandler } from 'express';
import CulinaryModel from '@/models/culinary';

export const getCulinaryList: RequestHandler = async (_req, res) => {
    const result = await CulinaryModel.find();

    res.send({
        status: true,
        result
    });
};
