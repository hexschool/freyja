import type { RequestHandler } from 'express';
import validator from 'validator';
import UsersModel from '@/models/user';

export const checkEmailExists: RequestHandler = async (req, res) => {
    const { email } = req.params;

    if (!validator.isEmail(email)) {
        throw new Error('Email 格式不正確');
    }

    const result = await UsersModel.findOne({ email });

    res.send({
        status: true,
        result: {
            isEmailExists: Boolean(result)
        }
    });
};
