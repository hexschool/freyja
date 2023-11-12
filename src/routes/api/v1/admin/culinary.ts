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
                    { $ref: '#/definitions/CulinaryResponses' },
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
            schema: { $ref: '#/definitions/CulinaryBody' },
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": { $ref: '#/definitions/CulinaryResponses' },
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
            schema: { $ref: '#/definitions/CulinaryBody' },
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": { $ref: '#/definitions/CulinaryResponses' },
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
                "result": { $ref: '#/definitions/CulinaryResponses' },
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
