import express from 'express';

import { createUser } from './user.controller';

const router = express.Router();

router.post('/user', createUser);

export const userRoutes = router;
