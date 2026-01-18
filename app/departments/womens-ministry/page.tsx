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
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768778056/WhatsApp_Image_2026-01-18_at_14.38.27_1_mhk6ud.jpg",
    },
    {
      name: "Mrs Agyekumwaa Akowua",
      role: "Vice President",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768778056/WhatsApp_Image_2026-01-18_at_14.38.27_2_nluojc.jpg",
    },
    {
      name: "Mrs Vera Osei ",
      role: "Secretary",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768778064/WhatsApp_Image_2026-01-18_at_14.38.27_qwujwq.jpg",
    },
    {
      name: "Mrs Charity Aggrey",
      role: "Treasurer",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768778064/WhatsApp_Image_2026-01-18_at_14.38.25_gubway.jpg",
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
