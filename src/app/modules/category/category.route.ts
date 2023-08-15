import express from 'express';

import { createCategory } from './category.controller';

const router = express.Router();

router.post('/create-category', createCategory);

export const categoryRoutes = router;
