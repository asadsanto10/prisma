import express from 'express';

import {
  createPost,
  deletePost,
  getAllPost,
  learnAggregateAndGrouping,
  updatePost,
} from './post.controller';

const router = express.Router();

router.get('/', getAllPost);
router.post('/create-post', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/learn-query', learnAggregateAndGrouping);

export const postRoutes = router;
