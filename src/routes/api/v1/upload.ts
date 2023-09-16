import { getImageUrl } from '@/controllers/upload';
import { handleUploadFile, isAuth } from '@/middlewares';
import { createRouter } from '@/utils';

const router = createRouter();

router.use(isAuth);

router.post('/', handleUploadFile, getImageUrl, () => {
    /**
     * #swagger.tags = ["Other - 其它"]
     * #swagger.description  = "上傳圖片"
     * #swagger.consumes = ['multipart/form-data']  
     * #swagger.parameters["image"] = {
          in: 'formData',
          type: 'file',
          required: 'true',
        } 
    */
});

export default router;
