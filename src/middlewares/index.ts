import type { RequestHandler } from 'express';
import multer from 'multer';
import validator from 'validator';
import RoomModel from '@/models/room';
import UsersModel from '@/models/user';
import { verifyToken } from '@/utils';

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
    for (let [key, value] of Object.entries(req.body)) {
        if (value === undefined || value === null) {
            throw new Error('欄位未填寫正確');
        }

        const _value = `${value}`;

        switch (key) {
            case 'name':
                if (!validator.isLength(_value, { min: 2 })) {
                    throw new Error('name 至少 2 個字元以上');
                }
                break;
            case 'email':
                if (!validator.isEmail(_value)) {
                    throw new Error('Email 格式不正確');
                }
                break;
            case 'password':
                if (!validator.isLength(_value, { min: 8 })) {
                    throw new Error('密碼需至少 8 碼以上');
                }
                if (validator.isAlpha(_value)) {
                    throw new Error('密碼不能只有英文');
                }
                if (validator.isNumeric(_value)) {
                    throw new Error('密碼不能只有數字');
                }
                if (!validator.isAlphanumeric(_value)) {
                    throw new Error('密碼需至少 8 碼以上，並英數混合');
                }
                break;
            case 'image':
                if (!validator.isURL(_value, { protocols: ['https'] })) {
                    throw new Error('image 格式不正確');
                }
                break;
            default:
                break;
        }
    }

    return next();
};

export const checkOrder: RequestHandler = async (req, _res, next) => {
    const { roomId, checkInDate, checkOutDate, peopleNum } = req.body;

    const roomInfo = await RoomModel.findById(roomId);

    if (!roomInfo) {
        throw new Error('此房型不存在!');
    }

    if (peopleNum > roomInfo.maxPeople) {
        throw new Error('peopleNum 錯誤!');
    }

    if (!validator.isDate(checkInDate)) {
        throw new Error('checkInDate 格式錯誤!');
    }

    if (!validator.isDate(checkOutDate)) {
        throw new Error('checkOutDate 格式錯誤!');
    }

    if (new Date(checkInDate) > new Date(checkOutDate)) {
        throw new Error('checkInDate 錯誤!');
    }

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
