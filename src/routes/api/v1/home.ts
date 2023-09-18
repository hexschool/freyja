import { createRouter } from '@/utils';
import * as NewController from '@/controllers/new';
import * as CulinaryController from '@/controllers/culinary';

const router = createRouter();

router.get('/news', NewController.getNewList, () => {
    /**
     * #swagger.tags = ["Home - 首頁"]
     * #swagger.description  = "最新消息"
     */
});

router.get('/news/:newId', NewController.getNewById, () => {
    /**
     * #swagger.tags = ["Home - 首頁"]
     * #swagger.description  = "最新消息詳細資料"
     */
});

router.get('/culinary', CulinaryController.getCulinaryList, () => {
    /**
     * #swagger.tags = ["Home - 首頁"]
     * #swagger.description  = "美味佳餚"
     */
});

export default router;
