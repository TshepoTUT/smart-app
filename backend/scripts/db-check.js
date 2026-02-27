const { PrismaClient } = require('../prisma/generate/prisma');

async function run() {
    const prisma = new PrismaClient();

    try {
        const result = await prisma.$queryRawUnsafe('SELECT 1 AS ok');
        console.log('✅ Database connection is healthy.');
        console.log(result);
        process.exitCode = 0;
    } catch (error) {
        console.error('❌ Database check failed.');
        console.error(error.message);
        process.exitCode = 1;
    } finally {
        await prisma.$disconnect();
    }
}

run();
