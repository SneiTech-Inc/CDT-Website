"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import PageHero from "@/components/page-hero"
import { Calendar, MapPin, Clock } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function EventsPage() {
  const upcomingEvents = [
    {
      date: "March 01, 2026",
      time: "9:00 AM - 11:30 AM",
      title: "Pastor's Appreciation Service",
      description:
        "Join us as we honor our spiritual leader for his dedication and service. A special worship service followed by a fellowship luncheon.",
      location: "Christ Dominion Temple Auditorium",
      icon: "🎯",
    },
    {
      date: "March 15, 2026",
      time: "7:00 AM - 10:00 AM",
      title: "Women's Prayer Breakfast",
      description:
        "Fellowship, intercession, and encouragement for our women. Guest speaker will share on faith and resilience.",
      location: "CDT Auditorium",
      icon: "🙏",
    },
    {
      date: "March 22, 2026",
      time: "10:00 AM - 4:00 PM",
      title: "Community Outreach & Welfare Program",
      description:
        "Serving our neighborhood with food distribution, medical check-ups, and community engagement initiatives.",
      location: "Abuakwa Kagyase Community",
      icon: "🤝",
    },
    {
      date: "April 05, 2026",
      time: "6:00 PM",
      title: "Men's Fellowship Dinner",
      description:
        "Brotherhood, accountability, and spiritual growth for men of the church. Featuring team-building activities and guest ministries.",
      location: "CDT Fellowship Center",
      icon: "👨",
    },
    {
      date: "April 12, 2026",
      time: "5:00 PM - 8:00 PM",
      title: "Couple's Night of Celebration",
      description:
        "A special evening celebrating marriage and family. Featuring worship, dinner, and inspirational sessions.",
      location: "Christ Dominion Temple",
      icon: "💕",
    },
    {
      date: "November 28 - December 02, 2026",
      time: "6:30PM - 9:00 PM",
      title: "Annual Church Harvest",
      description:
        "7 days of powerful worship, prophetic declarations, and testimonies. Ending with a grand harvest celebration on the final day.",
      location: "Kumasi Retreat Center",
      icon: "🏕️",
    },
  ]

  const regularEvents = [
    { day: "Every Sunday", time: "8:30 AM - 11:00 AM", event: "Main Worship Service", icon: "⛪" },
    { day: "Every Monday", time: "5:30 PM - 6:30 PM", event: "Women's Gathering", icon: "🎤" },
    { day: "Every Monday", time: "7:00 PM - 8:30 PM", event: "Youth Gathering", icon: "🎤" },
    { day: "Every Tuesday", time: "7:00 PM - 8:30 PM", event: "Bible Study", icon: "📖" },
    { day: "Every Thursday", time: "7:00 PM - 8:00 PM", event: "Prayer Meeting", icon: "🙏🏼" },
    { day: "Every Friday & Saturday", time: "6:30 PM - 8:30 PM", event: "Dominion Singers Rehearsal", icon: "🎵" },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Upcoming Events"
        subtitle="Join us for life-changing gatherings and community impact"
        imageBg="linear-gradient(135deg, rgba(45, 85, 120, 0.8), rgba(30, 60, 90, 0.8))"
      />

      {/* Regular Events */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Regular Gatherings
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularEvents.map((event, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-6 border-2 border-border hover:shadow-lg transition-shadow">
                    <span className="text-4xl mb-4 block">{event.icon}</span>
                    <h3 className="text-lg font-bold text-foreground mb-2">{event.event}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="font-semibold">{event.day}</p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Special Events
            </motion.h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="overflow-hidden border-2 border-border hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex items-center justify-center bg-primary/10 p-8 md:w-24 md:flex-shrink-0">
                        <span className="text-5xl">{event.icon}</span>
                      </div>
                      <div className="flex-grow p-6">
                        <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm">
                          <div className="flex items-center gap-2 text-foreground">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-foreground">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Button className="mt-4 bg-primary hover:bg-primary/90">Learn More</Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
              Join Us and Grow Spiritually
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg mb-8 opacity-90">
              Every event is an opportunity to deepen your faith, build community, and experience God's transforming
              love.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
