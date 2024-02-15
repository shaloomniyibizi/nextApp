import db from '@/lib/db';

export async function POST(req: Request) {
  const body = await req.json();
  const category = await db.category.create({
    data: body,
  });
  return new Response(JSON.stringify(category));
}
