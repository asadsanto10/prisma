import { Post, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: { author: true, category: true },
  });
  return result;
};

const getAllPost = async (options: {
  sortBy?: string;
  sortOrder?: string;
  searchTerm?: string;
  page?: string;
  limit?: string;
}) => {
  const { sortBy, sortOrder, searchTerm, limit, page } = options;

  const skip = Number(limit) * Number(page) - Number(limit) || 0;
  const take = Number(limit) || 10;

  return prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
      skip,
      take,
      include: {
        author: true,
        category: true,
      },
      orderBy: sortBy && sortOrder ? { [sortBy]: sortOrder } : { createdAt: 'desc' },
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
          },
        ],
      },
    });

    const total = await tx.post.count();

    return { data: result, total };
  });
};

const updatePost = async (id: number, data: Partial<Post>): Promise<Post> => {
  const result = await prisma.post.update({
    where: { id },
    data,
    include: {
      author: true,
      category: true,
    },
  });

  return result;
};

const deletePost = async (id: number): Promise<Post> => {
  const result = await prisma.post.delete({
    where: { id },
  });

  return result;
};

const learnAggregateAndGrouping = async () => {
  // const result = await prisma.post.aggregate({
  // 	_avg: { authorId: true, categoryId: true },
  // 	_count: { categoryId: true },
  // 	_sum: { categoryId: true },
  // });

  const result = await prisma.post.groupBy({
    by: ['title'],
    _count: {
      title: true,
    },
  });

  return result;
};

export const postService = {
  createPost,
  getAllPost,
  updatePost,
  deletePost,
  learnAggregateAndGrouping,
};
