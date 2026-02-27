const { PrismaClient } = require('../prisma/generate/prisma');

async function main() {
  const prisma = new PrismaClient();
  const email = process.argv[2];
  try {
    if (email) {
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          createdAt: true,
        },
      });
      console.log('User by email:', user);
    } else {
      const users = await prisma.user.findMany({ take: 1 });
      console.log('User query success:', users);
    }
  } catch (error) {
    console.error('User query failed:', error);
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

main();
