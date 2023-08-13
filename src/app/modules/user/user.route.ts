import express from 'express';

import { createUser, getAllUsers, getSingleUser, insertOrUpdateProfile } from './user.controller';

const router = express.Router();

router.post('/create-user', createUser);
router.post('/profile', insertOrUpdateProfile);
router.get('/', getAllUsers);
router.get('/:id', getSingleUser);

export const userRoutes = router;
