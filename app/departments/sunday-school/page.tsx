import DepartmentLayout from "@/components/department-layout"

export default function SundaySchoolPage() {
  const leaders = [
    {
      name: "Miss. Sandra Ntim",
      role: "Teacher",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769907450/WhatsApp_Image_2026-01-26_at_06.15.20_jzw0mg.jpg",
    },
    {
      name: "Mr Daniel Nyarko",
      role: "Teacher",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768696644/WhatsApp_Image_2026-01-11_at_19.02.23_u2zrur.jpg",
    },
    {
      name: "Mr Kwame Ampofo",
      role: "Teacher",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769907451/WhatsApp_Image_2026-01-26_at_06.15.21_kzuip1.jpg",
    },
  ]

  const activities = [
    "Structured Bible lessons for all age groups",
    "Interactive discussions and group learning activities",
    "Quarterly examinations and progress assessments",
    "Teacher training and development workshops",
    "Annual Sunday School competitions and awards",
    "Integrated discipleship and character development",
  ]

  return (
    <DepartmentLayout
      name="Sunday School Ministry"
      description="The Sunday School Ministry provides systematic, age-appropriate Bible teaching for all members of our church community. We believe every believer benefits from structured biblical education that builds spiritual knowledge, develops Christian character, and strengthens faith. Through organized classes and trained teachers, we create an environment for transformative learning."
      vision="A spiritually educated church community grounded in God's Word and living out biblical principles."
      mission="To provide comprehensive biblical education and discipleship across all age groups, equipping believers to understand Scripture, grow in faith, and apply God's Word to daily life."
      leaders={leaders}
      activities={activities}
    />
  )
}
