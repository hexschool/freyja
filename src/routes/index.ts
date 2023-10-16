import { createRouter } from '@/utils';
import home from './api/v1/home';
import orders from './api/v1/orders';
import rooms from './api/v1/rooms';
import user from './api/v1/user';
import verify from './api/v1/verify';
import healthCheck from './healthCheck';
import swagger from './swagger';

const routes = createRouter();

routes.use(swagger);

routes.use('/api/v1/user', user);

routes.use('/api/v1/verify', verify);

routes.use('/api/v1/home', home);

routes.use('/api/v1/rooms', rooms);

routes.use('/api/v1/orders', orders);

routes.use(healthCheck);

export default routes;
