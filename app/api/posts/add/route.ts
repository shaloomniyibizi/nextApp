import db from '@/lib/db';
export async function POST(req: Request) {
  const body = await req.json();

  const post = await db.post.create({
    data: body,
  });

  return new Response(JSON.stringify(post));
}
