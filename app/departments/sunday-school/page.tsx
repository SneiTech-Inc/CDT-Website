import DepartmentLayout from "@/components/department-layout"

export default function SundaySchoolPage() {
  const leaders = [
    {
      name: "Brother Emmanuel Asare",
      role: "Principal",
      image: "/placeholder.svg",
    },
    {
      name: "Sister Theresa Boakye",
      role: "Curriculum Coordinator",
      image: "/placeholder.svg",
    },
    {
      name: "Brother Isaac Mensah",
      role: "Class Coordinator",
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
