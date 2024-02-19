import { PrismaClient } from '@prisma/client/edge';

const globaldb = global as unknown as { prisma: PrismaClient };

export const db = globaldb.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globaldb.prisma = db;

export default db;
