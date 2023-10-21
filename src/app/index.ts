import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import '@/app/env';
import '@/app/connection';
import Routes from '@/routes';
import * as Exception from '@/app/exception';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

app.use(Routes);

app.use(Exception.sendNotFoundError);
app.use(Exception.catchCustomError);

Exception.catchGlobalError();

if (import.meta.env.PROD) {
    app.listen(process.env.PORT);
    console.log(`listening on http://localhost:${process.env.PORT}`);
}
