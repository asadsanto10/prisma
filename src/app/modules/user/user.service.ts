import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (userData: User): Promise<User> => {
	const result = await prisma.user.create({
		data: userData,
	});
	return result;
};

export const userService = { createUser };
