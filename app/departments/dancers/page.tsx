import DepartmentLayout from "@/components/department-layout"

export default function DominionDancersPage() {
  const leaders = [
    {
      name: "Sister Joyce Mensah",
      role: "Director",
      image: "/placeholder.svg",
    },
    {
      name: "Sister Miriam Agyeman",
      role: "Assistant Director",
      image: "/placeholder.svg",
    },
    {
      name: "Sister Stella Boateng",
      role: "Choreographer",
      image: "/placeholder.svg",
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
