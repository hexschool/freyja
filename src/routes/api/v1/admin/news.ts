import { Router } from 'express';
import * as NewController from '@/controllers/new';

const router = Router();

router.get(
    /**
     * #swagger.description  = "取得所有最新消息"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": [
                    {
                        "_id": "6523e9f23a22dd8d8207ef7c",
                        "title": "秋季旅遊，豪華享受方案",
                        "description": "秋天就是要來場豪華的旅遊...",
                        "image": "https://fakeimg.pl/300/",
                        "createdAt": "2023-10-09T11:54:26.586Z",
                        "updatedAt": "2023-10-09T11:54:26.586Z"
                    },
                ]
            }
        }
     */
    '/',
    NewController.getNewList
);

router.post(
    /**
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
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "_id": "6523e9fc3a22dd8d8207ef80",
                    "title": "秋季旅遊，豪華享受方案2",
                    "description": "秋天就是要來場豪華的旅遊...",
                    "image": "https://fakeimg.pl/300/",
                    "createdAt": "2023-10-09T11:54:36.967Z",
                    "updatedAt": "2023-10-09T11:54:36.967Z"
                }
            }
        }
     * #swagger.responses[400] = {
            schema: {
                "status": false,
                "message": "new validation failed: title: title 未填寫",
            }
        }
     */
    '/',
    NewController.createOneNew
);

router.put(
    /**
     * #swagger.description  = "修改最新消息"
     * #swagger.parameters['body'] = {
            in: 'body',
            schema: {
                title: "修改 - 秋季旅遊，豪華享受方案",
                description: "修改 - 秋天就是要來場豪華的旅遊...",
                image: "修改 - https://fakeimg.pl/300/"
            }
        }
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "_id": "6523e9fc3a22dd8d8207ef80",
                    "title": "秋季旅遊，豪華享受方案2",
                    "description": "秋天就是要來場豪華的旅遊...",
                    "image": "https://fakeimg.pl/300/",
                    "createdAt": "2023-10-09T11:54:36.967Z",
                    "updatedAt": "2023-10-09T11:54:36.967Z"
                }
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此最新消息不存在",
            }
        }
     */
    '/:id',
    NewController.updateNewById
);

router.delete(
    /**
     * #swagger.description  = "刪除最新消息"
     * #swagger.responses[200] = {
            schema: {
                "status": true,
                "result": {
                    "_id": "6523e9fc3a22dd8d8207ef80",
                    "title": "秋季旅遊，豪華享受方案2",
                    "description": "秋天就是要來場豪華的旅遊...",
                    "image": "https://fakeimg.pl/300/",
                    "createdAt": "2023-10-09T11:54:36.967Z",
                    "updatedAt": "2023-10-09T11:54:36.967Z"
                }
            }
        }
     * #swagger.responses[404] = {
            schema: {
                "status": false,
                "message": "此最新消息不存在",
            }
        }
     */
    '/:id',
    NewController.deleteNewById
);

export default router;
