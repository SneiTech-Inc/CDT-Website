import DepartmentLayout from "@/components/department-layout"

export default function MensMinistryPage() {
  const leaders = [
    {
      name: "Mr Moses Boakye",
      role: "President",
      image: "/placeholder.svg",
    },
    {
      name: "Mr Daniel Osei",
      role: "Vice President",
      image: "/placeholder.svg",
    },
    {
      name: "Mr Stephen Mensah",
      role: "Secretary",
      image: "/placeholder.svg",
    },
    {
      name: "Mr Stephen Mensah",
      role: "Treasurer",
      image: "/placeholder.svg",
    },
  ]

  const activities = [
    "Monthly men's prayer and accountability groups",
    "Professional development and business ethics workshops",
    "Father-son bonding and family strengthening activities",
    "Community service and infrastructure development projects",
    "Annual men's retreat focused on biblical manhood",
    "Youth mentorship and leadership training programs",
  ]

  return (
    <DepartmentLayout
      name="Men's Ministry"
      description="The Men's Ministry exists to develop spiritually mature, principled men who lead with integrity in their homes, workplaces, and communities. We foster brotherhood, accountability, and growth through meaningful activities that challenge men to live out their faith authentically. Our ministry provides practical support and biblical teaching for the unique spiritual challenges men face."
      vision="Godly men who are strong spiritual leaders, wise mentors, and servants in their families and communities."
      mission="To develop men of God who are rooted in Scripture, accountable in faith, and committed to leading their families and serving their communities with excellence and integrity."
      leaders={leaders}
      activities={activities}
    />
  )
}
