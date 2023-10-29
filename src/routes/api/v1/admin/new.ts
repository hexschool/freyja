import { Router } from 'express';
import * as NewController from '@/controllers/new';

const router = Router();

router.post(
    /**
     * #swagger.tags = ['Admin/News - 最新消息管理']
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
    '/news',
    NewController.createOneNew
);

router.put(
    /**
     * #swagger.tags = ['Admin/News - 最新消息管理']
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
    '/news/:id',
    NewController.updateNewById
);

router.delete(
    /**
     * #swagger.tags = ['Admin/News - 最新消息管理']
     * #swagger.description  = "刪除最新消息"
     */
    '/news/:id',
    NewController.deleteNewById
);

export default router;
