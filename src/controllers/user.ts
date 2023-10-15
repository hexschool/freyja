import type { Request, RequestHandler } from 'express';
import bcrypt from 'bcryptjs';
import UsersModel from '@/models/user';
import { generateToken, verifyToken } from '@/utils';

export const signup: RequestHandler = async (req, res, next) => {
    const { name, email, password, phone, birthday, address } = req.body;

    const checkEmail = await UsersModel.findOne({ email });
    if (checkEmail) {
        throw new Error('此 Email 已被註冊!');
    }

    const _result = await UsersModel.create({
        name,
        email,
        phone,
        birthday,
        address,
        password: await bcrypt.hash(password, 6)
    });
    const { password: _, ...result } = _result.toObject();

    res.send({
        status: true,
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
        status: true,
        token: generateToken({ userId: user._id }),
        result
    });
};

export const forget: RequestHandler = async (req, res) => {
    const { email, code, newPassword } = req.body;

    const user = await UsersModel.findOne({ email }).select('+verificationToken');
    if (!user) {
        throw new Error('忘記密碼錯誤');
    }

    const payload = verifyToken(user.verificationToken);

    if (payload.code === code) {
        await UsersModel.findByIdAndUpdate(
            user._id,
            {
                password: await bcrypt.hash(newPassword, 6)
            },
            {
                new: true
            }
        );
    }

    res.send({
        status: true
    });
};

export const check: RequestHandler = async (req, res) => {
    const token = `${req.headers.authorization?.replace('Bearer ', '')}`;
    res.send({
        status: true,
        token,
        result: req.user
    });
};

export const getInfo: RequestHandler = async (req, res) => {
    res.send({
        status: true,
        result: req.user
    });
};

export const updateInfo: RequestHandler = async (req, res) => {
    // 更新密碼
    await updateUserPassword(req);

    const { userId, name, phone, birthday, address } = req.body;

    const result = await UsersModel.findByIdAndUpdate(
        userId,
        {
            name,
            phone,
            birthday,
            address
        },
        {
            new: true,
            runValidators: true
        }
    );

    res.send({
        status: true,
        result
    });
};

const updateUserPassword = async (req: Request) => {
    const { userId, oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
        return null;
    }

    const user = await UsersModel.findById(userId).select('+password');
    if (!user) {
        throw new Error('此使用者不存在!');
    }

    const checkPassword = await bcrypt.compare(oldPassword, user.password);
    if (!checkPassword) {
        throw new Error('密碼錯誤!');
    }

    const result = await UsersModel.findByIdAndUpdate(
        userId,
        {
            password: await bcrypt.hash(newPassword, 6)
        },
        {
            new: true
        }
    );

    return result;
};
