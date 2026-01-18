import DepartmentLayout from "@/components/department-layout"

export default function WomensMinistryPage() {
  const leaders = [
    {
      name: "Mrs Josephine Oduro",
      role: "Director / Advisor",
      image: "/placeholder.svg",
    },
    {
      name: "Mrs Faustina Panka Cobbod",
      role: "President",
      image: "/placeholder.svg",
    },
    {
      name: "Mrs Agyekumwaa Akowua",
      role: "Vice President",
      image: "/placeholder.svg",
    },
    {
      name: "Mrs Vera Osei ",
      role: "Secretary",
      image: "/placeholder.svg",
    },
    {
      name: "Mrs Charity Aggrey",
      role: "Treasurer",
      image: "/placeholder.svg",
    },
  ]

  const activities = [
    "Monthly women's prayer meetings and intercession gatherings",
    "Spiritual formation and discipleship programs for women",
    "Community outreach and welfare initiatives",
    "Children's support and mentorship programs",
    "Annual women's conferences and retreats",
    "Marriage and family strengthening workshops",
  ]

  return (
    <DepartmentLayout
      name="Women's Ministry"
      description="The Women's Ministry is dedicated to empowering women spiritually, emotionally, and socially. We believe every woman is called to fulfill her destiny in Christ and make a meaningful impact in her home, church, and community. Our ministry creates a nurturing space for women to grow in faith, build deep friendships, and discover their God-given purpose."
      vision="A community of spiritually mature, confident women walking in their destiny as daughters of God and catalysts for kingdom transformation."
      mission="To equip, empower, and encourage women to grow in their relationship with God, develop leadership skills, and impact their families and communities through faith, integrity, and service."
      leaders={leaders}
      activities={activities}
    />
  )
}
