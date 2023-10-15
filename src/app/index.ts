import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import '@/app/env';
import '@/app/connection';
import Routes from '@/routes';
import Exception from '@/app/exception';

export const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static('src/views/style'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

app.use(Routes);

app.use(Exception.sendNotFoundError);
app.use(Exception.catchCustomError);

if (import.meta.env.PROD) {
    app.listen(process.env.PORT);
    console.log(`listening on http://localhost:${process.env.PORT}`);
}
