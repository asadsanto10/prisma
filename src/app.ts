import { Server } from 'http';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();
// server port
const port: number | string = process.env.PORT || 5005;

console.log(Server);
// parser
app.use(cors());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('ok');
});

app.listen(port, () => {
	console.log(`linserver listening on port:${port}`);
});

export default app;
