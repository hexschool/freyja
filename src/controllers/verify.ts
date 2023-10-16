import type { RequestHandler } from 'express';
import validator from 'validator';
import nodemailer from 'nodemailer';
import UsersModel from '@/models/user';
import { generateEmailToken } from '@/utils';

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

export const sendVerificationCode: RequestHandler = async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAILER_USER,
            pass: process.env.EMAILER_PASSWORD
        }
    });

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
        await transporter.verify();

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
};
