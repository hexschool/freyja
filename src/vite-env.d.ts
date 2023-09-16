/// <reference types="vite/client" />

import { IUser } from '@/models/user';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;

            DATABASE: string;
            DATABASE_PASSWORD: string;

            JWT_EXPIRES_DAY: string;
            JWT_SECRET: string;

            IMGUR_REFRESH_TOKEN: string;
            IMGUR_ALBUM_ID: string;
        }
    }

    namespace Express {
        interface Request {
            user?: IUser | undefined;
        }
    }
}
