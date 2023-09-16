import type { ErrorRequestHandler, RequestHandler } from 'express';

// 初始化，捕捉全域錯誤
(() => {
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
})();

export const sendNotFoundError: RequestHandler = (_req, res) => {
    res.status(404).send({ status: 'error', message: '無此路由資訊' });
};

export const catchCustomError: ErrorRequestHandler = (err: Error | string, _req, res, _next) => {
    if (typeof err === 'string') {
        return res.status(400).send({ status: 'error', message: err });
    }

    if ('type' in err && err.type === 'entity.parse.failed') {
        return res.status(400).send({ status: 'error', message: err.type });
    }

    // 開發模式回傳錯誤訊息
    if (!import.meta.env.PROD) {
        return res.status(400).send({ status: 'error', message: err.message, err });
    }

    return res.status(400).send({ status: 'error', message: err.message });
};
