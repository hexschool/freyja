import type { RequestHandler } from 'express';
import CulinaryModel from '@/models/culinary';

export const getCulinaryList: RequestHandler = async (_req, res, next) => {
    try {
        const result = await CulinaryModel.find();

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const getCulinaryById: RequestHandler = async (req, res, next) => {
    try {
        const result = await CulinaryModel.findById(req.params.id);
        if (!result) {
            throw new Error('此美味佳餚不存在!');
        }

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const createOneCulinary: RequestHandler = async (req, res, next) => {
    try {
        const { title, description, diningTime, image } = req.body;

        const result = await CulinaryModel.create({
            title,
            description,
            diningTime,
            image
        });

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const updateCulinaryById: RequestHandler = async (req, res, next) => {
    try {
        const { title, description, diningTime, image } = req.body;

        const result = await CulinaryModel.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                diningTime,
                image
            },
            {
                new: true,
                runValidators: true
            }
        );
        if (!result) {
            throw new Error('此美味佳餚不存在!');
        }

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const deleteCulinaryById: RequestHandler = async (req, res, next) => {
    try {
        const result = await CulinaryModel.findByIdAndRemove(req.params.id);
        if (!result) {
            throw new Error('此美味佳餚不存在!');
        }

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};
