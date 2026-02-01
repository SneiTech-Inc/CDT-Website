import DepartmentLayout from "@/components/department-layout"

export default function DominionSingersPage() {
  const leaders = [
    {
      name: "Miss Sandra Ntim",
      role: "President & Director",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769907450/WhatsApp_Image_2026-01-26_at_06.15.20_jzw0mg.jpg",
    },
    {
      name: "Mr Daniel Nkrumah",
      role: "Vice Director",
      image: "/placeholder.svg",
    },
    {
      name: "Mrs Ernestina Osei",
      role: "Praise & Worship Leader",
      image: "/placeholder.svg",
    },
  ]

  const activities = [
    "Leading congregational worship during services",
    "Choir rehearsals and voice training",
    "Special music ministrations and performances",
    "Music composition and arrangement",
    "Participation in church events and conferences",
    "Training young singers and developing musical talent",
  ]

  return (
    <DepartmentLayout
      name="Dominion Singers"
      description="The Dominion Singers is the musical voice of our church, leading congregational worship and creating an atmosphere where the Holy Spirit moves freely. We believe worship is central to spiritual growth and church vitality. Our singers are trained musicians and dedicated worshippers who use their gifts to glorify God and minister to the congregation through anointed music."
      vision="Musicians and singers of excellence who lead people into authentic worship and encounters with God's presence."
      mission="To lead dynamic, spirit-filled worship that draws people into God's presence, expresses the church's faith, and provides a musical platform for the gospel message."
      leaders={leaders}
      activities={activities}
    />
  )
}
