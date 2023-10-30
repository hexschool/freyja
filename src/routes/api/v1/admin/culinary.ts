import { Router } from 'express';
import * as CulinaryController from '@/controllers/culinary';

const router = Router();

router.get(
    /**
     * #swagger.description  = "取得所有美味佳餚"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": [
                    {
                        "_id": "653e30dafa27fbbeb053501b",
                        "title": "海霸",
                        "description": "以新鮮海產料理聞名...",
                        "diningTime": "SUN-MON 11:00-20:30",
                        "image": "https://fakeimg.pl/300/",
                        "createdAt": "2023-10-29T10:15:54.811Z",
                        "updatedAt": "2023-10-29T10:15:54.811Z"
                    }
                ]
            }
        }
     */
    '/',
    CulinaryController.getCulinaryList
);

router.post(
    /**
     * #swagger.description  = "新增美味佳餚"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                title: "海霸",
                description: "以新鮮海產料理聞名...",
                diningTime: "SUN-MON 11:00-20:30",
                image: "https://fakeimg.pl/300/"
            }
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "_id": "653e30dafa27fbbeb053501b",
                    "title": "海霸",
                    "description": "以新鮮海產料理聞名...",
                    "diningTime": "SUN-MON 11:00-20:30",
                    "image": "https://fakeimg.pl/300/",
                    "createdAt": "2023-10-29T10:15:54.811Z",
                    "updatedAt": "2023-10-29T10:15:54.811Z"
                }
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "new validation failed: diningTime: diningTime 未填寫",
            }
        }
     */
    '/',
    CulinaryController.createOneCulinary
);

router.put(
    /**
     * #swagger.description  = "修改美味佳餚"
     * #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                title: "修改 - 海霸",
                description: "修改 - 以新鮮海產料理聞名...",
                diningTime: "SUN-MON 11:00-20:30",
                image: "修改 - https://fakeimg.pl/300/"
            }
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "_id": "653e30dafa27fbbeb053501b",
                    "title": "海霸",
                    "description": "以新鮮海產料理聞名...",
                    "diningTime": "SUN-MON 11:00-20:30",
                    "image": "https://fakeimg.pl/300/",
                    "createdAt": "2023-10-29T10:15:54.811Z",
                    "updatedAt": "2023-10-29T10:15:54.811Z"
                }
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "new validation failed: diningTime: diningTime 未填寫",
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此美味佳餚不存在",
            }
        }
     */
    '/:id',
    CulinaryController.updateCulinaryById
);

router.delete(
    /**
     * #swagger.description  = "刪除美味佳餚"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "_id": "653e30dafa27fbbeb053501b",
                    "title": "海霸",
                    "description": "以新鮮海產料理聞名...",
                    "diningTime": "SUN-MON 11:00-20:30",
                    "image": "https://fakeimg.pl/300/",
                    "createdAt": "2023-10-29T10:15:54.811Z",
                    "updatedAt": "2023-10-29T10:15:54.811Z"
                }
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此美味佳餚不存在",
            }
        }
     */
    '/:id',
    CulinaryController.deleteCulinaryById
);

export default router;
