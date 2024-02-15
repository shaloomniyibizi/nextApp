import db from '@/lib/db';

export async function POST(req: Request) {
  const users = await req.json();
  const addMany = await db.user.createMany({
    data: users,
  });

  return new Response(JSON.stringify(addMany));
}
