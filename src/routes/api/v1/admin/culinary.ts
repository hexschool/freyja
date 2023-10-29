import { Router } from 'express';
import * as CulinaryController from '@/controllers/culinary';

const router = Router();

router.post(
    /**
     * #swagger.tags = ['Admin/Culinary - 美味佳餚管理']
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
     */
    '/culinary',
    CulinaryController.createOneCulinary
);

router.put(
    /**
     * #swagger.tags = ['Admin/Culinary - 美味佳餚管理']
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
     */
    '/culinary/:id',
    CulinaryController.updateCulinaryById
);

router.delete(
    /**
     * #swagger.tags = ['Admin/Culinary - 美味佳餚管理']
     * #swagger.description  = "刪除美味佳餚"
     */
    '/culinary/:id',
    CulinaryController.deleteCulinaryById
);

export default router;
