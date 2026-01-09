import DepartmentLayout from "@/components/department-layout"

export default function DomDiaPage() {
  const leaders = [
    {
      name: "Brother Thomas Mensah",
      role: "Director",
      image: "/placeholder.svg",
    },
    {
      name: "Brother Eric Boakye",
      role: "Technical Lead",
      image: "/placeholder.svg",
    },
    {
      name: "Sister Priscilla Asante",
      role: "Content Manager",
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
