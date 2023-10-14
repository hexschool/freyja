import type { RequestHandler } from 'express';

export const getImageUrl: RequestHandler = async (req, res) => {
    if (!req.file) {
        throw new Error('未上傳檔案');
    }

    const formData = new FormData();
    formData.append('image', new Blob([Buffer.from(req.file.buffer)]));

    await new Promise(resolve => setTimeout(resolve, 1000));

    res.send({
        status: true,
        result: {
            link: 'https://fakeimg.pl/300/'
        }
    });
};
