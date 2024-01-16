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
    },
    // 參考 : https://swagger-autogen.github.io/docs/swagger-2/schemas-and-definitions
    definitions: {
        CulinaryBody: {
            title: '修改 - 海霸',
            description: '修改 - 以新鮮海產料理聞名...',
            diningTime: 'SUN-MON 11:00-20:30',
            image: '修改 - https://fakeimg.pl/300/'
        },
        CulinaryResponses: {
            _id: '653e30dafa27fbbeb053501b',
            title: '海霸',
            description: '以新鮮海產料理聞名...',
            diningTime: 'SUN-MON 11:00-20:30',
            image: 'https://fakeimg.pl/300/',
            createdAt: '2023-10-29T10:15:54.811Z',
            updatedAt: '2023-10-29T10:15:54.811Z'
        },
        NewsBody: {
            title: '秋季旅遊，豪華享受方案',
            description: '秋天就是要來場豪華的旅遊...',
            image: 'https://fakeimg.pl/300/'
        },
        NewsResponses: {
            _id: '6523e9f23a22dd8d8207ef7c',
            title: '秋季旅遊，豪華享受方案',
            description: '秋天就是要來場豪華的旅遊...',
            image: 'https://fakeimg.pl/300/',
            createdAt: '2023-10-09T11:54:26.586Z',
            updatedAt: '2023-10-09T11:54:26.586Z'
        },
        RoomBody: {
            name: '尊爵雙人房',
            description: '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
            imageUrl: 'https://fakeimg.pl/300/',
            imageUrlList: ['https://fakeimg.pl/300/', 'https://fakeimg.pl/300/', 'https://fakeimg.pl/300/'],
            areaInfo: '24坪',
            bedInfo: '一張大床',
            maxPeople: 4,
            price: 10000,
            layoutInfo: [{ title: '市景', isProvide: true }],
            facilityInfo: [{ title: '平面電視', isProvide: true }],
            amenityInfo: [{ title: '衛生紙', isProvide: true }]
        },
        RoomResponses: {
            name: '尊爵雙人房',
            description: '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
            imageUrl: 'https://fakeimg.pl/300/',
            imageUrlList: ['https://fakeimg.pl/300/', 'https://fakeimg.pl/300/', 'https://fakeimg.pl/300/'],
            areaInfo: '24坪',
            bedInfo: '一張大床',
            maxPeople: 4,
            price: 10000,
            status: 1,
            layoutInfo: [{ title: '市景', isProvide: true }],
            facilityInfo: [{ title: '平面電視', isProvide: true }],
            amenityInfo: [{ title: '衛生紙', isProvide: true }],
            _id: '653e4661336cdccc752127a0',
            createdAt: '2023-10-29T11:47:45.641Z',
            updatedAt: '2023-10-29T11:47:45.641Z'
        },
        OrderUserInfo: {
            address: {
                zipcode: 802,
                detail: '文山路23號'
            },
            name: 'Joanne Chen',
            phone: '0912345678',
            email: 'example@gmail.com'
        },
        OrderBody: {
            roomId: '65251f6095429cd58654bf12',
            checkInDate: '2023/06/18',
            checkOutDate: '2023/06/19',
            peopleNum: 2,
            userInfo: { $ref: '#/definitions/OrderUserInfo' }
        },
        OrderResponses: {
            userInfo: { $ref: '#/definitions/OrderUserInfo' },
            _id: '653e335a13831c2ac8c389bb',
            roomId: { $ref: '#/definitions/RoomResponses' },
            checkInDate: '2023-06-17T16:00:00.000Z',
            checkOutDate: '2023-06-18T16:00:00.000Z',
            peopleNum: 2,
            orderUserId: '6533f0ef4cdf5b7f762747b0',
            status: 0,
            createdAt: '2023-10-29T10:26:34.498Z',
            updatedAt: '2023-10-29T10:26:34.498Z'
        }
    }
};

const outputFile = `${path.resolve()}/develop/swagger_output.json`;

swaggerAutogenous(outputFile, ['src/app/index.ts'], doc);
