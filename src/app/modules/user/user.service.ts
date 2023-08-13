import { PrismaClient, Profile, User } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (userData: User): Promise<User> => {
	const result = await prisma.user.create({
		data: userData,
	});
	return result;
};

const insertOrUpdateProfile = async (profileData: Profile): Promise<Profile> => {
	const isExist = await prisma.profile.findUnique({
		where: {
			userId: profileData.userId,
		},
	});

	if (isExist) {
		const result = await prisma.profile.update({
			where: { userId: profileData.userId },
			data: { bio: profileData.bio },
		});
		return result;
	}

	const result = await prisma.profile.create({ data: profileData });
	return result;
};

const getAllUsers = async (): Promise<User[]> => {
	const result = await prisma.user.findMany({
		// select: {
		// 	email: true,
		// 	name: true,
		// },
		include: {
			profile: true,
			posts: true,
		},
	});
	return result;
};

const getSingleUser = async (userId: number) => {
	const result = await prisma.user.findUnique({
		where: { id: userId },
		include: {
			profile: true,
			posts: true,
		},
	});
	return result;
};

export const userService = { createUser, insertOrUpdateProfile, getAllUsers, getSingleUser };
