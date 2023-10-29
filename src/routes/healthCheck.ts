import express, { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    const healthCheck = {
        status: true,
        message: 'OK',
        uptime: process.uptime(),
        timestamp: Date.now(),
        host: req.headers.host
    };
    res.send(healthCheck);
});

router.use('/favicon.ico', express.static('public/favicon.ico'));

export default router;
