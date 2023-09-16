import UsersModel from '@/models/user';
import { checkValidator, verifyToken } from '@/utils';
import type { RequestHandler } from 'express';
import multer from 'multer';

// token 驗證
export const isAuth: RequestHandler = async (req, _res, next) => {
    /**
     * #swagger.security = [{ "bearerAuth": [] }]
     */
    const token = `${req.headers.authorization?.replace('Bearer ', '')}`;
    const result = verifyToken(token);

    const user = await UsersModel.findById(result.userId);
    if (!user) {
        throw new Error('token 錯誤');
    }
    req.user ??= user;

    next();
};

export const checkRequestBodyValidator: RequestHandler = (req, _res, next) => {
    checkValidator({ ...req.body });

    return next();
};

export const handleUploadFile: RequestHandler = (...args) => {
    const instance = multer({
        limits: {
            fileSize: 2 * 1024 * 1024
        },
        fileFilter: (_req, file, callback) => {
            // 只接受四種圖片格式
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                callback(new Error('圖片格式只接受 jpg、jpeg、png、gif'));
                return;
            }
            callback(null, true);
        }
    });

    return instance.single('image')(...args);
};
