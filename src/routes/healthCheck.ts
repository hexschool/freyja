import { createRouter } from '@/utils';

const router = createRouter();

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

router.get('/favicon.ico', (_, res) => {
    res.end();
});

export default router;
