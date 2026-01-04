import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Get admin credentials from environment variables
  const adminEmail1 = process.env.ADMIN_EMAIL_1 || 'anh-ly@startin-de.com'
  const adminPass1 = process.env.ADMIN_PASS_1 || 'Admin123!'
  const adminEmail2 = process.env.ADMIN_EMAIL_2 || 'admin@startin-de.com'
  const adminPass2 = process.env.ADMIN_PASS_2 || 'Admin123!'

  // Create admin user 1: anh-ly@startin-de.com
  const adminPassword1 = await bcrypt.hash(adminPass1, 10)
  await prisma.user.upsert({
    where: { email: adminEmail1 },
    update: {},
    create: {
      email: adminEmail1,
      password: adminPassword1,
      name: 'Anh Ly',
      role: 'ADMIN',
      emailverified: new Date(),
    },
  })
  console.log(`✅ Created admin user: ${adminEmail1}`)

  // Create admin user 2: admin@startin-de.com
  const adminPassword2 = await bcrypt.hash(adminPass2, 10)
  await prisma.user.upsert({
    where: { email: adminEmail2 },
    update: {},
    create: {
      email: adminEmail2,
      password: adminPassword2,
      name: 'StartinDE Admin',
      role: 'ADMIN',
      emailverified: new Date(),
    },
  })
  console.log(`✅ Created admin user: ${adminEmail2}`)

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
      descriptionVi: 'Đại học kỹ thuật hàng đầu Đức, nổi tiếng về nghiên cứu xuất sắc.',
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
      descriptionVi: 'Đại học lâu đời nhất Đức với các chương trình nghiên cứu đẳng cấp thế giới.',
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
      descriptionVi: 'Đại học nghiên cứu hàng đầu nằm ở trung tâm Munich.',
      website: 'https://www.lmu.de',
    },
    {
      name: 'University of Freiburg',
      nameVi: 'Đại học Freiburg',
      slug: 'university-of-freiburg',
      city: 'Freiburg',
      state: 'Baden-Württemberg',
      ranking: 4,
      description: 'Top research university with strong environmental sciences program.',
      descriptionVi: 'Đại học nghiên cứu hàng đầu với chương trình khoa học môi trường mạnh mẽ.',
      website: 'https://www.uni-freiburg.de',
    },
    {
      name: 'RWTH Aachen University',
      nameVi: 'Đại học RWTH Aachen',
      slug: 'rwth-aachen-university',
      city: 'Aachen',
      state: 'North Rhine-Westphalia',
      ranking: 5,
      description: 'Leading technical university with strong industry partnerships.',
      descriptionVi: 'Đại học kỹ thuật hàng đầu với quan hệ đối tác công nghiệp mạnh mẽ.',
      website: 'https://www.rwth-aachen.de',
    },
  ]

  for (const uni of universities) {
    await prisma.university.upsert({
      where: { slug: uni.slug },
      update: {},
      create: uni,
    })
    console.log(`✅ Created university: ${uni.name}`)
  }

  console.log('')
  console.log('✅ Database seeded successfully!')
  console.log('')
  console.log('📝 Admin accounts created:')
  console.log(`1. ${adminEmail1} / ${adminPass1}`)
  console.log(`2. ${adminEmail2} / ${adminPass2}`)
  console.log('')
  console.log('🔐 Please change these passwords after first login!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
