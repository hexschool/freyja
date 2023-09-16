import type { RequestHandler } from 'express';
import bcrypt from 'bcryptjs';
import UsersModel from '@/models/user';
import { generateToken } from '@/utils';

export const signup: RequestHandler = async (req, res, next) => {
    const { name, email, password } = req.body;

    const checkEmail = await UsersModel.findOne({ email });
    if (checkEmail) {
        throw new Error('此 Email 已被註冊!');
    }

    const _result = await UsersModel.create({
        name,
        email,
        password: await bcrypt.hash(password, 6)
    });
    const { password: _, ...result } = _result.toObject();

    res.send({
        status: 'success',
        token: generateToken({ userId: result._id }),
        result
    });

    next();
};

export const login: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    const user = await UsersModel.findOne({ email }).select('+password');
    if (!user) {
        throw new Error('此 Email 不存在!');
    }

    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
        throw new Error('密碼錯誤!');
    }

    const { password: _, ...result } = user.toObject();

    res.send({
        status: 'success',
        token: generateToken({ userId: user._id }),
        result
    });
};

export const resetPassword: RequestHandler = async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 6);
    const result = await UsersModel.findByIdAndUpdate(req.body.userId, {
        password
    });
    if (!result) {
        throw new Error('此 id 不存在');
    }
    res.send({ status: 'success', message: '密碼重設成功' });
};

export const check: RequestHandler = async (req, res) => {
    const token = `${req.headers.authorization?.replace('Bearer ', '')}`;
    res.send({
        status: 'success',
        token,
        result: req.user
    });
};

export const updateProfile: RequestHandler = async (req, res) => {
    const result = await UsersModel.findByIdAndUpdate(
        req.body.userId,
        {
            name: req.body.name,
            avatar: req.body.avatar
        },
        {
            new: true
        }
    );
    if (!result) {
        throw new Error('此 id 不存在');
    }

    res.send({ status: 'success', result });
};
