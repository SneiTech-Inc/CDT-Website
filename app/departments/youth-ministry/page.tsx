import DepartmentLayout from "@/components/department-layout"

export default function YouthMinistryPage() {
  const leaders = [
    {
      name: "Pastor Samuel Boateng",
      role: "Director",
      image: "/pastor-samuel.jpg",
    },
    {
      name: "Brother Kwesi Amponsah",
      role: "Program Coordinator",
      image: "/placeholder.svg",
    },
    {
      name: "Sister Deborah Asante",
      role: "Discipleship Leader",
      image: "/placeholder.svg",
    },
  ]

  const activities = [
    "Friday night youth gatherings with worship, teaching, and fellowship",
    "Youth Bible studies and spiritual formation groups",
    "Leadership development and mentorship programs",
    "Sports and recreational events building community",
    "Missions and community service outreach projects",
    "Annual youth camps and intensive spiritual retreats",
  ]

  return (
    <DepartmentLayout
      name="Youth Ministry"
      description="The Youth Ministry empowers the next generation to encounter God, develop their identities in Christ, and discover their calling. We provide a vibrant, welcoming community where young people can grow spiritually, build authentic friendships, and find mentorship from mature believers. Through engaging programs, we help youth navigate cultural pressures while maintaining biblical values."
      vision="A generation of young believers passionate about Jesus, living out kingdom values, and positioned to transform their generation."
      mission="To provide youth with spiritual formation, biblical teaching, mentorship, and community that help them develop a deep relationship with Christ and discover their divine purpose."
      leaders={leaders}
      activities={activities}
    />
  )
}
