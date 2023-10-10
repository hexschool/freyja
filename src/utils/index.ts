import { Router, type RequestHandler } from 'express';
import jsonWebToken, { type JwtPayload } from 'jsonwebtoken';

function catchAsync(func: RequestHandler): RequestHandler {
    return (req, res, next) => {
        Promise.resolve(func(req, res, next)).catch(next);
    };
}

function catchAsyncRouter(router: Router) {
    for (const key in router) {
        if (key === 'get' || key === 'post' || key === 'delete' || key === 'patch' || key === 'put' || key === 'use') {
            const method = router[key];

            router[key] = (...args: any[]) => {
                const newArgs = args.map(value => {
                    return typeof value === 'function' ? catchAsync(value) : value;
                });

                return method.call<any, any, any>(router, ...newArgs);
            };
        }
    }

    return router;
}

export function createRouter() {
    return catchAsyncRouter(Router());
}

export function generateToken(payload: { userId?: string; email?: string; organizationId?: string; boardId?: string }) {
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
