import { Router, type NextFunction, type Request, type Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '@develop/swagger_output.json';

const router = Router();

router.use('/swagger', swaggerUi.serve, (req: Request, res: Response, next: NextFunction) => {
    swaggerSpec.host = `${req.headers.host}`;

    if (process.env.NODE_ENV === 'product') {
        swaggerSpec.schemes = ['https'];
    }

    const requestHandler = swaggerUi.setup(swaggerSpec);

    requestHandler(req, res, next);
});

export default router;
