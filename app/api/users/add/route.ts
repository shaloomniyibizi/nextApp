import db from '@/lib/db';

interface user {
  email: string;
  name: string;
}

export async function POST(req: Request) {
  const body: user = await req.json();
  const users = await db.user.create({
    data: body,
  });
  return new Response(JSON.stringify(users));
}
