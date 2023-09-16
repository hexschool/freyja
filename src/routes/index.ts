import { createRouter } from '@/utils';
import user from './api/v1/user';
import healthCheck from './healthCheck';
import swagger from './swagger';

const routes = createRouter();

routes.use(healthCheck);

routes.use(swagger);

routes.use('/api/v1/user', user);

export default routes;
