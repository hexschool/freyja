import type { RequestHandler } from 'express';
import NewsModel from '@/models/new';

export const getNewList: RequestHandler = async (_req, res, next) => {
    try {
        const result = await NewsModel.find();

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const getNewById: RequestHandler = async (req, res, next) => {
    try {
        const result = await NewsModel.findById(req.params.id);
        if (!result) {
            throw new Error('此最新消息不存在!');
        }

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const createOneNew: RequestHandler = async (req, res, next) => {
    try {
        const { title, description, image } = req.body;

        const result = await NewsModel.create({
            title,
            description,
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

export const updateNewById: RequestHandler = async (req, res, next) => {
    try {
        const { title, description, image } = req.body;

        const result = await NewsModel.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                image
            },
            {
                new: true,
                runValidators: true
            }
        );
        if (!result) {
            throw new Error('此最新消息不存在!');
        }

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};

export const deleteNewById: RequestHandler = async (req, res, next) => {
    try {
        const result = await NewsModel.findByIdAndRemove(req.params.id);
        if (!result) {
            throw new Error('此最新消息不存在!');
        }

        res.send({
            status: true,
            result
        });
    } catch (error) {
        next(error);
    }
};
