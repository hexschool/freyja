import type { RequestHandler } from 'express';
import CulinaryModel from '@/models/culinary';

export const getCulinaryList: RequestHandler = async (_req, res) => {
    const result = await CulinaryModel.find();

    res.send({
        status: true,
        result
    });
};

export const getCulinaryById: RequestHandler = async (req, res) => {
    const result = await CulinaryModel.findById(req.params.id);
    if (!result) {
        throw new Error('此美味佳餚不存在!');
    }

    res.send({
        status: true,
        result
    });
};

export const createOneCulinary: RequestHandler = async (req, res) => {
    const { title, description, image } = req.body;

    const result = await CulinaryModel.create({
        title,
        description,
        image
    });

    res.send({
        status: true,
        result
    });
};

export const updateCulinaryById: RequestHandler = async (req, res) => {
    const { title, description, image } = req.body;

    const result = await CulinaryModel.findByIdAndUpdate(
        req.params.id,
        {
            title,
            description,
            image
        },
        {
            new: true
        }
    );
    if (!result) {
        throw new Error('此美味佳餚不存在!');
    }

    res.send({
        status: true,
        result
    });
};

export const deleteCulinaryById: RequestHandler = async (req, res) => {
    const result = await CulinaryModel.findByIdAndRemove(req.params.id);
    if (!result) {
        throw new Error('此美味佳餚不存在!');
    }

    res.send({
        status: true,
        result
    });
};
