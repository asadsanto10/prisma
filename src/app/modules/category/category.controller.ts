import { Category } from '@prisma/client';
import { RequestHandler } from 'express';

import { categoryService } from './category.service';

export const createCategory: RequestHandler = async (req, res): Promise<void> => {
	try {
		const data = req.body as Category;
		const result = await categoryService.createCategory(data);
		res.json({ message: 'category created successfully', statusbar: 'success', result });
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};
