import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';

import { userRoutes } from './app/modules/user/user.route';

const app: Application = express();
// server port
const port: number | string = process.env.PORT || 5005;

// parser
app.use(cors());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/user', userRoutes);

app.listen(port, () => {
	console.log(`linserver listening on port:${port}`);
});

export default app;
