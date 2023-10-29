import { Router } from 'express';
import admin from './api/v1/admin';
import home from './api/v1/home';
import orders from './api/v1/orders';
import rooms from './api/v1/rooms';
import user from './api/v1/user';
import verify from './api/v1/verify';
import healthCheck from './healthCheck';
import swagger from './swagger';

const routes = Router();

routes.use(swagger);

routes.use(
    /**
     * #swagger.ignore = true
     */
    healthCheck
);

routes.use(
    /**
     * #swagger.tags = ["Users - 使用者"]
     */
    '/api/v1/user',
    user
);

routes.use(
    /**
     * #swagger.tags = ["Verify - 驗證"]
     */
    '/api/v1/verify',
    verify
);

routes.use('/api/v1/home', home);

routes.use(
    /**
     * #swagger.tags = ["Rooms - 房型"]
     */
    '/api/v1',
    rooms
);

routes.use(
    /**
     * #swagger.tags = ["Orders - 訂單"]
     */
    '/api/v1',
    orders
);

routes.use('/api/v1/admin', admin);

export default routes;
