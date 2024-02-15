import db from '@/lib/db';

export async function GET() {
  const categories = await db.category.findMany();

  return new Response(JSON.stringify(categories));
}
