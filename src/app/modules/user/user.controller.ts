import { Profile, User } from '@prisma/client';
import { RequestHandler } from 'express';

import { userService } from './user.service';

export const createUser: RequestHandler = async (req, res): Promise<void> => {
	try {
		const data = req.body as User;
		const result = await userService.createUser(data);
		res.json({ message: 'user created successfully', statusbar: 'success', result });
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

export const insertOrUpdateProfile: RequestHandler = async (req, res): Promise<void> => {
	try {
		const data = req.body as Profile;
		const result = await userService.insertOrUpdateProfile(data);
		res.json({ message: 'profile created/updated successfully', status: 'success', result });
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

export const getAllUsers: RequestHandler = async (req, res): Promise<void> => {
	try {
		const result = await userService.getAllUsers();
		res.json({ message: 'User fetch successfully', status: 'success', result });
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

export const getSingleUser: RequestHandler = async (req, res): Promise<void> => {
	try {
		const userId = Number(req.params.id) as number;
		const result = await userService.getSingleUser(userId);
		res.json({ message: 'User fetch successfully', status: 'success', result });
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};
