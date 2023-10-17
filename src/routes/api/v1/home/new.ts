import { Router } from 'express';
import * as NewController from '@/controllers/new';
import { catchAsync } from '@/utils';

const router = Router();

router.get('/news', catchAsync(NewController.getNewList), () => {
    /**
     * #swagger.tags = ["Home - 首頁 - 最新消息"]
     * #swagger.description  = "取得所有最新消息"
     */
});

router.get('/news/:id', catchAsync(NewController.getNewById), () => {
    /**
     * #swagger.tags = ["Home - 首頁 - 最新消息"]
     * #swagger.description  = "取得單筆最新消息"
     */
});

router.post('/news', catchAsync(NewController.createOneNew), () => {
    /**
     * #swagger.tags = ["Home - 首頁 - 最新消息"]
     * #swagger.description  = "新增最新消息"
     * #swagger.parameters['body'] = {
            in: 'body',
            required: true,
            schema: {
                title: "秋季旅遊，豪華享受方案",
                description: "秋天就是要來場豪華的旅遊...",
                image: "https://fakeimg.pl/300/"
            }
        }
     */
});

router.put('/news/:id', catchAsync(NewController.updateNewById), () => {
    /**
     * #swagger.tags = ["Home - 首頁 - 最新消息"]
     * #swagger.description  = "修改最新消息"
     * #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                title: "修改 - 秋季旅遊，豪華享受方案",
                description: "修改 - 秋天就是要來場豪華的旅遊...",
                image: "修改 - https://fakeimg.pl/300/"
            }
        }
     */
});

router.delete('/news/:id', catchAsync(NewController.deleteNewById), () => {
    /**
     * #swagger.tags = ["Home - 首頁 - 最新消息"]
     * #swagger.description  = "刪除最新消息"
     */
});

export default router;
