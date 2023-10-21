import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    /**
     * #swagger.ignore = true
     */
    const healthCheck = {
        status: true,
        message: 'OK',
        uptime: process.uptime(),
        timestamp: Date.now(),
        host: req.headers.host
    };
    res.send(healthCheck);
});

router.get('/favicon.ico', (_, res) => {
    /**
     * #swagger.ignore = true
     */
    res.end();
});

export default router;
