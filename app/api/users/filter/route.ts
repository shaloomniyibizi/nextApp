import db from '@/lib/db';

export async function GET(req: Request) {
  const users = await db.user.findMany({
    where: {
      // role: 'ADMIN',
      // name: {
      //   startsWith: 's',
      // },
      OR: [
        {
          name: {
            contains: 's',
          },
        },
        {
          email: {
            contains: 's',
          },
        },
    ],
    AND: [{
     posts: {
       none
      }
     }]
    },
  });
  return new Response(JSON.stringify(users));
}
