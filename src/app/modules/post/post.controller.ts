import { Post } from '@prisma/client';
import { RequestHandler } from 'express';

import { postService } from './post.service';

export const createPost: RequestHandler = async (req, res): Promise<void> => {
	try {
		const data = req.body as Post;
		const result = await postService.createPost(data);
		res.json({ message: 'Post created successfully', statusbar: 'success', result });
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

export const getAllPost: RequestHandler = async (req, res): Promise<void> => {
	try {
		console.log(req.query);
		const options = req.query;
		const result = await postService.getAllPost(options);
		res.json({
			message: 'Post fetch successfully',
			statusbar: 'success',
			data: result.data,
			total: result.total,
		});
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

export const updatePost: RequestHandler = async (req, res): Promise<void> => {
	try {
		const id = Number(req.params.id);
		const data = req.body as Partial<Post>;
		const result = await postService.updatePost(id, data);
		res.json({
			message: 'Post update successfully',
			statusbar: 'success',
			result,
		});
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

export const deletePost: RequestHandler = async (req, res): Promise<void> => {
	try {
		const id = Number(req.params.id);
		const result = await postService.deletePost(id);
		res.json({
			message: 'Post delete successfully',
			statusbar: 'success',
			result,
		});
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

export const learnAggregateAndGrouping: RequestHandler = async (req, res): Promise<void> => {
	try {
		const result = await postService.learnAggregateAndGrouping();
		res.json({
			message: 'learn Aggregate And Grouping successfully',
			statusbar: 'success',
			result,
		});
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};
