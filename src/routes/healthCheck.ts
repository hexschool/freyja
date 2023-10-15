import { createRouter } from '@/utils';

const router = createRouter();

router.get('/', (req, res) => {
    /**
     * #swagger.tags = ["Other - 其它"]
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
     * #swagger.tags = ["Other - 其它"]
     */
    res.end();
});

export default router;
