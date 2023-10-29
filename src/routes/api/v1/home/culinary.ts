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
    '/culinary',
    CulinaryController.getCulinaryList
);

router.get(
    /**
     * #swagger.description  = "取得單筆美味佳餚"
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
    '/culinary/:id',
    CulinaryController.getCulinaryById
);

export default router;
