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
      name: 'University of Melbourne',
      nameVi: 'Đại học Melbourne',
      slug: 'university-of-melbourne',
      city: 'Melbourne',
      state: 'Victoria',
      ranking: 1,
      tuitionMin: 30000,
      tuitionMax: 45000,
      description: 'Top-ranked university in Australia, known for research excellence.',
      website: 'https://www.unimelb.edu.au',
    },
    {
      name: 'Australian National University',
      nameVi: 'Đại học Quốc gia Úc',
      slug: 'australian-national-university',
      city: 'Canberra',
      state: 'ACT',
      ranking: 2,
      tuitionMin: 32000,
      tuitionMax: 48000,
      description: 'Australia\'s national university with world-class research programs.',
      website: 'https://www.anu.edu.au',
    },
    {
      name: 'University of New South Wales',
      nameVi: 'Đại học New South Wales',
      slug: 'university-of-new-south-wales',
      city: 'Sydney',
      state: 'NSW',
      ranking: 3,
      tuitionMin: 35000,
      tuitionMax: 50000,
      description: 'Leading university known for engineering, business, and technology.',
      website: 'https://www.unsw.edu.au',
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
