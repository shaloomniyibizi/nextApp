import db from '@/lib/db';
import { useSearchParams } from 'next/navigation';
interface userId {
  userId: string;
}
export async function GET(req: Request, { params }) {
  const userId = useSearchParams(params.id);
  const user = await db.user.findFirst({
    where: {
      id: userId.toString(),
    },
  });
  return new Response(JSON.stringify(user));
}
