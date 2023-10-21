import { Router } from 'express';
import * as CulinaryController from '@/controllers/culinary';
import { isAuth } from '@/middlewares';

const router = Router();

router.get('/culinary', CulinaryController.getCulinaryList, () => {
    /**
     * #swagger.tags = ["Home - 首頁 - 美味佳餚"]
     * #swagger.description  = "取得所有美味佳餚"
     */
});

router.get('/culinary/:id', CulinaryController.getCulinaryById, () => {
    /**
     * #swagger.tags = ["Home - 首頁 - 美味佳餚"]
     * #swagger.description  = "取得單筆美味佳餚"
     */
});

router.post('/culinary', isAuth, CulinaryController.createOneCulinary, () => {
    /**
     * #swagger.tags = ["Home - 首頁 - 美味佳餚"]
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
});

router.put('/culinary/:id', isAuth, CulinaryController.updateCulinaryById, () => {
    /**
     * #swagger.tags = ["Home - 首頁 - 美味佳餚"]
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
});

router.delete('/culinary/:id', isAuth, CulinaryController.deleteCulinaryById, () => {
    /**
     * #swagger.tags = ["Home - 首頁 - 美味佳餚"]
     * #swagger.description  = "刪除美味佳餚"
     */
});

export default router;
