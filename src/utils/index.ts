import { type RequestHandler } from 'express';
import jsonWebToken, { type JwtPayload } from 'jsonwebtoken';

export function catchAsync(func: RequestHandler): RequestHandler {
    return (req, res, next) => {
        Promise.resolve(func(req, res, next)).catch(next);
    };
}

export function generateToken(payload: { userId?: string }) {
    return jsonWebToken.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_DAY
    });
}

export function verifyToken(token: string) {
    try {
        return jsonWebToken.verify(token, process.env.JWT_SECRET) as JwtPayload;
    } catch (error) {
        throw new Error('驗證失敗!');
    }
}

export function generateEmailToken() {
    const code = generateRandomCode();

    const token = jsonWebToken.sign({ code }, process.env.JWT_SECRET, {
        expiresIn: 3600
    });

    return { code, token };
}

function generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let code = '';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }

    return code;
}
