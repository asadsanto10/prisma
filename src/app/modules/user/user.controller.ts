import { User } from '@prisma/client';
import { RequestHandler } from 'express';

import { userService } from './user.service';

export const createUser: RequestHandler = async (req, res): Promise<void> => {
	try {
		const data = req.body as User;
		const result = await userService.createUser(data);
		res.json({ message: 'user created successfully1', statusbar: 'success', result });
	} catch (error) {
		console.log(error);
		res.json(error);
	}
};
