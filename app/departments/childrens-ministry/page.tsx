import DepartmentLayout from "@/components/department-layout"

export default function ChildrensMinistryPage() {
  const leaders = [
    {
      name: "Mrs Josephine Oduro",
      role: "Director",
      image: "/placeholder.svg",
    },
    {
      name: "Mrs Beatrice Amponsa",
      role: "Madam (Children’s Care)",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769303594/WhatsApp_Image_2026-01-18_at_14.40.45_vqafdf.jpg",
    },
    {
      name: "Miss Agnes Amoako",
      role: "Madam (Children’s Care)",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769303594/WhatsApp_Image_2026-01-18_at_14.40.40_ej1f7j.jpg",
    },
    {
      name: "Mrs Evelyn Nkrumah",
      role: "Madam (Children’s Care)",
      image: "/placeholder.svg",
    },
    {
      name: "Mrs Grace Amoah",
      role: "Madam (Children’s Care)",
      image: "/placeholder.svg",
    },
    {
      name: "Miss Asantewaa Kusi",
      role: "Madam (Children’s Care)",
      image: "/placeholder.svg",
    },
    {
      name: "Miss Wilhermina Oduro",
      role: "Madam (Children’s Care)",
      image: "/placeholder.svg",
    },
    {
      name: "Miss Priscilla",
      role: "Madam (Children’s Care)",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769303593/WhatsApp_Image_2026-01-18_at_14.40.40_1_vgqe3b.jpg",
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
