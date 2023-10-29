import swaggerAutogenous from 'swagger-autogen';
import path from 'path';

const doc = {
    info: {
        title: 'Freyja API',
        description: '六角學院的旅館 API 系統'
    },
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'authorization',
            description: '請加上 API Token'
        }
    }
};

const outputFile = `${path.resolve()}/develop/swagger_output.json`;

swaggerAutogenous(outputFile, ['src/app/index.ts'], doc);
