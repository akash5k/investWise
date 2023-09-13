import { PrismaClient } from "@prisma/client"
const data = [
  {
    title: "Education",
    selfWeight: 0.2,
    subcategories: [
      { title: "College Fees", selfWeight: 0.2 },
      { title: "Textbooks and Learning Material", selfWeight: 0.3 },
      { title: "Online Courses", selfWeight: 0.2 },
      { title: "Private Tutoring", selfWeight: 0.22 },
      { title: "Educational Software and Tools", selfWeight: 0.21 },
      { title: "Miscellaneous", selfWeight: 0.52 },
    ],
  },
  {
    title: "Skill Building",
    selfWeight: 0.2,
    subcategories: [
      { title: "Courses and Workshops", selfWeight: 0.24 },
      { title: "Certificates and Licenses", selfWeight: 0.22 },
      { title: "Software and Tools", selfWeight: 0.26 },
      { title: "Subscription Services", selfWeight: 0.2 },
      { title: "Travel for Skill Improvement", selfWeight: 0.29 },
    ],
  },
  {
    title: "Yourself",
    selfWeight: 0.4,
    subcategories: [
      { title: "Health and Wellness", selfWeight: 0.2 },
      { title: "Personal Development Books", selfWeight: 0.2 },
      { title: "Hobbies and Interests", selfWeight: 0.22 },
      { title: "Mental Health Services", selfWeight: 0.2 },
      { title: "Travel for Personal Growth", selfWeight: 0.22 },
      { title: "Volunteer and Charity", selfWeight: 0.22 },
      { title: "Lifestyle and Wellbeing", selfWeight: 0.22 },
    ],
  },
  {
    title: "Financial Investments",
    selfWeight: 0.14,
    subcategories: [
      { title: "Stocks", selfWeight: 0.22 },
      { title: "Bonds", selfWeight: 0.22 },
      { title: "Mutual Funds", selfWeight: 0.22 },
      { title: "ETFs", selfWeight: 0.21 },
      { title: "Real Estate", selfWeight: 0.3 },
      { title: "Cryptocurrency", selfWeight: 0.4 },
    ],
  },
]

const prisma = new PrismaClient()

const run = async () => {
  await prisma.investmentParameter.deleteMany({})

  await prisma.investmentChildParameter.deleteMany({})

  data.map(async (d) => {
    const parent = await prisma.investmentParameter.create({
      data: {
        name: d.title,
        selfWeight: +d.selfWeight,
      },
    })
    await Promise.all(
      d.subcategories.map((s) => {
        return prisma.investmentChildParameter.create({
          data: {
            name: s.title,
            selfWeight: s.selfWeight,
            parentId: parent.id,
          },
        })
      })
    )
  })
}

run()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
