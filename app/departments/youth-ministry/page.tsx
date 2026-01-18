import DepartmentLayout from "@/components/department-layout"

export default function YouthMinistryPage() {
  const leaders = [
    {
      name: "Bro. Samuel Kwadwo Dafou",
      role: "President",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768698863/WhatsApp_Image_2026-01-11_at_16.10.29_q7ktic.jpg",
    },
    {
      name: "Miss Agnes Amoako",
      role: "Vice President",
      image: "/placeholder.svg",
    },
    {
      name: "Bro Daniel Nyarko",
      role: "Secretary",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768696644/WhatsApp_Image_2026-01-11_at_19.02.23_u2zrur.jpg",
    },
    {
      name: "Miss Sandra Durowaa",
      role: "Treasurer",
      image: "/placeholder.svg",
    },
    {
      name: "Miss Felicia Ayebah",
      role: "Organizer",
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
