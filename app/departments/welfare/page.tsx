import DepartmentLayout from "@/components/department-layout"

export default function WelfarePage() {
  const leaders = [
    {
      name: "Mr. Agyei Mensah",
      role: "Head",
      image: "/placeholder.svg",
    },
    {
      name: "Mrs Nana Yaa Agyeiwaa Bawa",
      role: "Head",
      image: "/placeholder.svg",
    },
    {
      name: "Mad. Victoria Duku",
      role: "Head",
      image: "/placeholder.svg",
    },
  ]

  const activities = [
    "Food and material assistance for vulnerable families",
    "Medical outreach and health awareness programs",
    "Educational support for underprivileged children",
    "Scholarship programs for deserving students",
    "Community development projects",
    "Disaster relief and emergency assistance",
  ]

  return (
    <DepartmentLayout
      name="Welfare Department"
      description="The Welfare Department manifests God's compassion by meeting practical needs in our congregation and community. We believe faith must be expressed through action, and we're committed to serving the vulnerable, poor, and marginalized with dignity and respect. Through organized programs and community partnerships, we address physical, educational, and social needs."
      vision="A community where every person's basic needs are met and human dignity is honored through the love of Christ."
      mission="To identify and meet the physical, material, and educational needs of vulnerable persons through compassionate service, advocacy, and community development initiatives aligned with biblical principles of justice."
      leaders={leaders}
      activities={activities}
    />
  )
}
