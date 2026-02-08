import DepartmentLayout from "@/components/department-layout"

export default function DomDiaPage() {
  const leaders = [
    {
      name: "Mr Philip Zenore",
      role: "Media Director/Supervisor",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769304438/WhatsApp_Image_2026-01-18_at_14.43.45_be7uy9.jpg",
    },
    {
      name: "Mr Clement Yeboah",
      role: "Sound Engineer / Technical lead",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769304438/WhatsApp_Image_2026-01-18_at_14.46.33_ax2lwg.jpg",
    },
    {
      name: "Mr Patrick Obeng",
      role: "Live Stream Operator",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769304437/WhatsApp_Image_2026-01-18_at_14.45.28_1_iikvrq.jpg",
    },
    {
      name: "Mr Kingsley Aggrey",
      role: "Live Stream Operator",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769304438/WhatsApp_Image_2026-01-18_at_14.45.28_jmtxp3.jpg",
    },
    {
      name: "Mr Clement Opoku",
      role: "Camera Operator",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769304438/WhatsApp_Image_2026-01-18_at_14.43.44_1_omm1wn.jpg",
    },
    {
      name: "Mr Nathaniel Kugoriamo",
      role: "Live Stream Operator",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1770526256/WhatsApp_Image_2026-02-01_at_23.24.20_ypid0w.jpg",
    },
    {
      name: "Mrs Lordina Opoku",
      role: "Live Stream Operator",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769304438/WhatsApp_Image_2026-01-18_at_14.43.44_rylqst.jpg",
    },
    {
      name: "Mr Albert Antwi",
      role: "Sound Assistant",
      image: "/placeholder.svg",
    },
    {
      name: "Mr Patrick Bekoe",
      role: "Sound Assistant",
      image: "/placeholder.svg",
    },
  ]

  const activities = [
    "Live streaming of church services",
    "Audio and visual production during services",
    "Social media content creation and management",
    "Video production and editing of sermons",
    "Photography documentation of church events",
    "Technical support and equipment maintenance",
  ]

  return (
    <DepartmentLayout
      name="DomDia (Media Department)"
      description="DomDia (Dominion Dia - 'Domain of Light') is our media and communications department dedicated to leveraging technology to extend our ministry reach. We produce and broadcast content that brings church services to those unable to attend in person and provides digital platforms for spiritual growth. Through professional production and strategic communication, we amplify our gospel message."
      vision="A media ministry that extends our church's reach globally, making the gospel accessible and engaging through excellence in production and digital platforms."
      mission="To produce high-quality audio, video, and digital content that effectively communicates the gospel message, documents church life, and extends our ministry impact beyond our physical location."
      leaders={leaders}
      activities={activities}
    />
  )
}
