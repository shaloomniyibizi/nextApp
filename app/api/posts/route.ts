import db from '@/lib/db';

export async function GET() {
  const posts = await db.post.findMany();
  return new Response(JSON.stringify(posts));
}
