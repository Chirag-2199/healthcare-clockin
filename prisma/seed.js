// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    // Hardcoded careworker data
    const careworkers = [
        {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'password123', // Make sure to hash passwords in production
        },
        {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            password: 'password456', // Make sure to hash passwords in production
        },
        {
            name: 'Alex Brown',
            email: 'alex.brown@example.com',
            password: 'password789', // Make sure to hash passwords in production
        },
    ];

    // Insert careworkers into the database
    for (const careworkerData of careworkers) {
        const hashedPassword = await hash(careworkerData.password, 10);

        await prisma.careworker.create({
            data: {
                name: careworkerData.name,
                email: careworkerData.email,
                password: hashedPassword,
            },
        });
    }

    console.log('Careworkers have been created!');
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
