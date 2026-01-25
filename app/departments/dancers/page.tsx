import DepartmentLayout from "@/components/department-layout"

export default function DominionDancersPage() {
  const leaders = [
    {
      name: "Mrs. Vera Osei",
      role: "Director",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768778064/WhatsApp_Image_2026-01-18_at_14.38.27_qwujwq.jpg",
    },
    {
      name: "Sister Charity",
      role: "Assistant Directors",
      image: "/placeholder.svg",
    },
    {
      name: "Sister Elizabeth Agyapong",
      role: "Choreographer",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769307278/WhatsApp_Image_2026-01-11_at_14.34.12_svqr3l.jpg",
    },
  ]

  const activities = [
    "Choreographed worship dances during services",
    "Special dance performances and presentations",
    "Dance rehearsals and skill development",
    "Training and mentoring young dancers",
    "Participation in church events and conferences",
    "Creating visual expressions of spiritual themes",
  ]

  return (
    <DepartmentLayout
      name="Dominion Dancers"
      description="The Dominion Dancers use movement, rhythm, and choreography to express worship and glorify God. We believe that dance is a legitimate form of worship and praise found throughout Scripture. Our dancers are trained performers who combine technical skill with spiritual sensitivity, creating powerful visual expressions of faith during our services."
      vision="Spirit-filled dancers who choreograph movements that engage hearts in worship and create transformative experiences of God's presence."
      mission="To create and perform choreographed worship dances that enhance congregational worship, inspire spiritual growth, and present visual expressions of biblical truth and God's character."
      leaders={leaders}
      activities={activities}
    />
  )
}
