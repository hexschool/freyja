import type { ErrorRequestHandler, RequestHandler } from 'express';

export const sendNotFoundError: RequestHandler = (_req, res) => {
    res.status(404).send({
        status: false,
        message: '無此路由資訊'
    });
};

export const catchCustomError: ErrorRequestHandler = (err, _req, res, _next) => {
    const message = getErrorMessage(err);

    return res.status(err?.status || 400).send({
        ...message,
        status: false
    });
};

function getErrorMessage(err: any) {
    if (typeof err === 'string') {
        return { message: err };
    }

    if ('type' in err && err.type === 'entity.parse.failed') {
        return { message: err.type };
    }

    // 開發模式回傳錯誤訊息
    if (process.env.NODE_ENV === 'development') {
        return { message: err.message, err };
    }

    return { message: err.message };
}

export function catchGlobalError() {
    // 初始化，捕捉全域錯誤
    if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET 未設定!');
    }
    process.on('uncaughtException', error => {
        console.error('未捕獲的異常！');
        console.error(error);
        process.exit(1);
    });

    process.on('unhandledRejection', (reason, promise) => {
        console.error('未捕捉到的 rejection :', promise, '原因：', reason);
    });
}
