import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';

export const resolvers = {
    Query: {
        users: async () => await prisma.user.findMany(),
        shifts: async () => await prisma.shift.findMany(),
    },

    Mutation: {
        // Create a user (careworker or manager)
        createUser: async (_: any, { email, password, role }: any) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            return prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    role,
                },
            });
        },

        // Clock in a careworker
        clockIn: async (_: any, { userId, location, note }: any) => {
            return prisma.shift.create({
                data: {
                    userId,
                    clockInTime: new Date(),
                    location,
                    note,
                },
            });
        },

        // Clock out a careworker
        clockOut: async (_: any, { userId, note }: any) => {
            const existingShift = await prisma.shift.findFirst({
                where: {
                    userId,
                    clockOutTime: null,
                },
            });

            if (!existingShift) {
                throw new Error('No active shift found for this user');
            }

            return prisma.shift.update({
                where: { id: existingShift.id },
                data: {
                    clockOutTime: new Date(),
                    note,
                },
            });
        },
    },
};
