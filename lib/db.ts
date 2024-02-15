import { PrismaClient } from '@prisma/client';

const globalforprisma = global as unknown as { prisma: PrismaClient };

export const db = globalforprisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalforprisma.prisma = db;

export default db;
