import type { RequestHandler } from 'express';

export const getImageUrl: RequestHandler = async (req, res) => {
    if (!req.file) {
        throw new Error('未上傳檔案');
    }

    const formData = new FormData();
    formData.append('image', new Blob([Buffer.from(req.file.buffer)]));
    formData.append('album', process.env.IMGUR_ALBUM_ID);

    const { data } = await fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        body: formData,
        headers: {
            Authorization: `Bearer ${process.env.IMGUR_REFRESH_TOKEN}`
        }
    }).then(value => value.json());

    res.send({ status: true, result: data });
};
