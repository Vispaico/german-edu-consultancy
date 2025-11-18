import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@educonsultancy.vn' },
    update: {},
    create: {
      email: 'admin@educonsultancy.vn',
      password: adminPassword,
      name: 'Admin User',
      role: 'ADMIN',
      emailVerified: new Date(),
    },
  })

  // Create consultant user
  const consultantPassword = await bcrypt.hash('consultant123', 10)
  await prisma.user.upsert({
    where: { email: 'consultant@educonsultancy.vn' },
    update: {},
    create: {
      email: 'consultant@educonsultancy.vn',
      password: consultantPassword,
      name: 'Nguyen Van A',
      role: 'CONSULTANT',
      emailVerified: new Date(),
      consultant: {
        create: {
          specialization: 'Engineering & IT',
          experience: 5,
        },
      },
    },
  })

  // Create sample universities
  const universities = [
    {
      name: 'Technical University of Munich',
      nameVi: 'Đại học Kỹ thuật Munich',
      slug: 'technical-university-of-munich',
      city: 'Munich',
      state: 'Bavaria',
      ranking: 1,
      description: 'Top-ranked technical university in Germany, known for research excellence.',
      website: 'https://www.tum.de',
    },
    {
      name: 'Heidelberg University',
      nameVi: 'Đại học Heidelberg',
      slug: 'heidelberg-university',
      city: 'Heidelberg',
      state: 'Baden-Württemberg',
      ranking: 2,
      description: 'Germany\'s oldest university with world-class research programs.',
      website: 'https://www.uni-heidelberg.de',
    },
    {
      name: 'LMU Munich',
      nameVi: 'Đại học Ludwig Maximilian Munich',
      slug: 'lmu-munich',
      city: 'Munich',
      state: 'Bavaria',
      ranking: 3,
      description: 'Leading research university in the heart of Munich.',
      website: 'https://www.lmu.de',
    },
  ]

  for (const uni of universities) {
    await prisma.university.upsert({
      where: { slug: uni.slug },
      update: {},
      create: uni,
    })
  }

  console.log('✅ Database seeded successfully!')
  console.log('')
  console.log('📝 Default accounts created:')
  console.log('Admin: admin@educonsultancy.vn / admin123')
  console.log('Consultant: consultant@educonsultancy.vn / consultant123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
