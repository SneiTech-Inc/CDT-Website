import DepartmentLayout from "@/components/department-layout"

export default function SundaySchoolPage() {
  const leaders = [
    {
      name: "Miss. Sandra Ntim",
      role: "Teacher",
      image: "/placeholder.svg",
    },
    {
      name: "Brother Daniel Nyarko",
      role: "Teacher",
      image: "/placeholder.svg",
    },
    {
      name: "Brother Kwame Ampofo",
      role: "Teacher",
      image: "/placeholder.svg",
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
