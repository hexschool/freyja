import { createRouter } from '@/utils';
import swaggerSpec from '@develop/swagger_output.json';
import type { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

const router = createRouter();

router.use('/swagger', swaggerUi.serve, (req: Request, res: Response, next: NextFunction) => {
    swaggerSpec.host = `${req.headers.host}`;

    if (import.meta.env.PROD) {
        swaggerSpec.schemes = ['https'];
    }

    const requestHandler = swaggerUi.setup(swaggerSpec);

    requestHandler(req, res, next);
});

export default router;
