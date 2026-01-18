import DepartmentLayout from "@/components/department-layout"

export default function DominionUshersPage() {
  const leaders = [
    {
      name: "Mr. Agyei Mensah",
      role: "Chief Usher",
      image: "/placeholder.svg",
    },
    {
      name: "Miss Grace Kissiwaa",
      role: "Assistant Chief Usher",
      image: "/placeholder.svg",
    },
    {
      name: "Mr. Bright Owusu",
      role: "Coordinator",
      image: "/placeholder.svg",
    },
  ]

  const activities = [
    "Welcoming and seating guests with warmth and professionalism",
    "Creating a hospitable and orderly worship environment",
    "Assisting with offerings and special collections",
    "Managing crowd flow and safety during services",
    "Training and mentoring new ushers",
    "Supporting special events and programs",
  ]

  return (
    <DepartmentLayout
      name="Dominion Ushers"
      description="The Dominion Ushers are the first line of hospitality and service in our church. We believe that ushering is a vital ministry that sets the tone for our worship experience and demonstrates genuine care for our guests. Our ushers are trained, courteous, and committed to creating a welcoming environment where every person feels valued."
      vision="A hospitality ministry that welcomes every guest with warmth, professionalism, and genuine Christ-like care."
      mission="To provide exceptional hospitality and logistical support that creates a welcoming, safe, and orderly environment for worship and fellowship."
      leaders={leaders}
      activities={activities}
    />
  )
}
