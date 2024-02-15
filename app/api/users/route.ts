import db from '@/lib/db';

export async function GET() {
  const users = await db.user.findMany();
  return new Response(JSON.stringify(users));
}
