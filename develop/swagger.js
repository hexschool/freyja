import swaggerAutogenous from 'swagger-autogen';
import path from 'path';

const doc = {
    info: {
        title: 'Freyja 旅館 API 系統 | 六角學院',
        description: `打破影音課程售後不理，我們在線上等著你。\n注意事項：登入成功後請點「Authorize」輸入 Token。\n\n範例程式碼 :

    fetch('/api/v1/home/news', { method: 'GET' })
        .then(response => response.json())
        .then(res => {
            // { status: 'true', result: [{...}] }
            console.log(res);
        });
    `
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
