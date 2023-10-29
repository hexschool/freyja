import type { RequestHandler } from 'express';
import validator from 'validator';
import nodemailer from 'nodemailer';
import UsersModel from '@/models/user';
import { generateEmailToken } from '@/utils';

export const checkEmailExists: RequestHandler = async (req, res, next) => {
    try {
        const email = req.body.email;

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
    } catch (error) {
        next();
    }
};

export const sendVerificationCode: RequestHandler = async (req, res, next) => {
    try {
        const email = req.body.email;
        const { code, token } = generateEmailToken();

        const user = await UsersModel.findOneAndUpdate(
            {
                email
            },
            {
                verificationToken: token
            },
            {
                new: true
            }
        );

        if (user) {
            const transporter = await getTransporter();

            await transporter.sendMail({
                from: process.env.EMAILER_USER,
                to: email,
                subject: 'Node 驗證碼',
                html: `<p>使用 ${code} 做為 Node 帳戶密碼安全性驗證碼</p>`
            });
        }

        res.send({
            status: true
        });
    } catch (error) {
        next(error);
    }
};

const getTransporter = async () => {
    const { EMAILER_USER, EMAILER_PASSWORD } = process.env;

    if (!EMAILER_USER || !EMAILER_PASSWORD) {
        throw new Error('Email 服務未啟用');
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAILER_USER,
            pass: process.env.EMAILER_PASSWORD
        }
    });

    await transporter.verify();

    return transporter;
};
