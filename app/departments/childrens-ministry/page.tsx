import DepartmentLayout from "@/components/department-layout"

export default function ChildrensMinistryPage() {
  const leaders = [
    {
      name: "Pastor Ama Kwakye",
      role: "Director",
      image: "/pastor-ama.jpg",
    },
    {
      name: "Sister Akosua Mensah",
      role: "Assistant Director",
      image: "/placeholder.svg",
    },
    {
      name: "Brother Yaw Owusu",
      role: "Activities Coordinator",
      image: "/placeholder.svg",
    },
  ]

  const activities = [
    "Sunday children's church with age-appropriate biblical teaching",
    "Creative activities, games, and arts and crafts",
    "Memory verse competitions and Bible quizzes",
    "Children's drama and music performances",
    "Holiday celebrations and special events",
    "Counseling and support for children in crisis",
  ]

  return (
    <DepartmentLayout
      name="Children's Ministry"
      description="The Children's Ministry creates a safe, joyful, and nurturing environment where children discover God's love and learn biblical truths. We believe childhood is a critical season for spiritual formation, and we're committed to planting seeds of faith that bear fruit throughout their lives. Through creative teaching, play, and mentorship, we help children develop a personal relationship with Jesus."
      vision="Children who know Jesus personally, love God's Word, and grow up as committed followers of Christ."
      mission="To provide children with loving, age-appropriate spiritual teaching and mentorship that helps them develop a personal faith, healthy character, and a foundation for lifelong discipleship."
      leaders={leaders}
      activities={activities}
    />
  )
}
