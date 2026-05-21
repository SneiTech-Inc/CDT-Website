"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import PageHero from "@/components/page-hero"
import Image from "next/image"
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
      date: "January 12-19, 2026",
      time: "6:30pm - 8:30pm",
      title: "12 Days of Prayer",
      description: "Start the year with intensive prayer and fasting. A time of spiritual renewal, seeking God's direction, and establishing the foundation for a blessed 2026.",
      location: "Christ Dominion Temple",
      icon: "🙏",
    },
    {
      date: "February 14, 2026",
      time: "7pm - 9pm",
      title: "Special Valentine's Day Service",
      description: "An exciting evening of worship and teaching on God's love, relationships, and the power of love in our lives. Bring your loved ones for a night of spiritual enrichment.",
      location: "Christ Dominion Temple Main Hall",
      icon: "✨",
    },
    {
      date: "February-March 24-01, 2026",
      time: "6:30pm - 8:30pm",
      title: "REVIVAL/REVIVAL!!",
      description: "An exciting season of refreshing and spiritual awakening. Experience powerful ministrations, miracles, signs and wonders as the Holy Spirit moves mightily.",
      location: "Christ Dominion Temple Main Hall",
      icon: "✨",
    },
    {
      date: "March 08, 2026",
      time: "8:30am - 11:00pm",
      title: "Pastor's Appreciation Day",
      description: "A special day to honor and celebrate the leadership and dedication of our pastoral team. Join us for worship, testimonies, and fellowship.",
      location: "Christ Dominion Temple",
      icon: "🎖️",
    },
    {
      date: "April 2-5, 2026",
      time: "Morning & Evening Event",
      title: "Easter Celebration & Convention",
      description: "Celebrate the resurrection of Christ with powerful worship, teaching on the resurrection hope, and special ministry sessions throughout the weekend.",
      location: "Christ Dominion Temple",
      icon: "🕯️",
    },
    {
      date: "May 5-10, 2026",
      time: "6:30pm - 8:30pm",
      title: "Women's Ministry Day (WM Day)",
      description: "A dedicated time to celebrate and empower the women of the church through workshops, worship, intercession, and inspiring testimonies.",
      location: "Christ Dominion Temple",
      icon: "👩",
    },
    {
      date: "June 1-7, 2026",
      time: "6:30pm - 8:30pm",
      title: "Mid Year Fasting & Prayers",
      description: "A focused week of fasting and prayer to seek God's guidance, breakthrough, and blessings for the second half of the year.",
      location: "Christ Dominion Temple",
      icon: "📣",
    },
    {
      date: "June 10-14, 2026",
      time: "6:30pm - 8:30pm",
      title: "Men's Ministry Day (MM Day)",
      description: "Fellowship and spiritual growth for the men of the church. Leadership development, accountability, and mentorship sessions.",
      location: "Christ Dominion Temple",
      icon: "👨",
    },
    {
      date: "June 21, 2026",
      time: "11:00 AM - 1:00 PM",
      title: "Evangelism Campaign",
      description: "A concentrated period of gospel outreach and soul-winning activities. Multi-faceted approach to reaching families and communities.",
      location: "Abuakwa Housing & Surrounding Areas",
      icon: "🌍",
    },
    {
      date: "July 01-05, 2026",
      time: "6:30pm - 8:30pm",
      title: "Mid-Year Harvest",
      description: "A time of thanksgiving and celebration for God's provision and blessings in the first half of the year. Special offerings, testimonies, and worship.",
      location: "Christ Dominion Temple",
      icon: "🌾",
    },
    {
      date: "August 04-10, 2026",
      time: "6:30pm - 8:30pm",
      title: "Children's Ministry Week",
      description: "A fun and spiritually enriching week for the children of the church. Bible stories, games, crafts, and worship designed to nurture their faith.",
      location: "Christ Dominion Temple",
      icon: "👧👦",
    },
    {
      date: "September 09-13, 2026",
      time: "6:30pm - 8:30pm",
      title: "Youth Ministry Week",
      description: "A time for young people to grow in their faith through interactive activities, discussions, and worship.",
      location: "Christ Dominion Temple",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      date: "September 25-27, 2026",
      time: "7:00pm - 9:00pm",
      title: "MUSICALS & Gospel Concert",
      description: "An evening of inspiring worship and entertainment featuring the Dominion Singers and talented artists from our church and beyond.",
      location: "Christ Dominion Temple Main Hall",
      icon: "🎵",
    },
    {
      date: "December 01-06, 2026",
      time: "6:30pm - 8:30pm",
      title: "Main Year Harvest",
      description: "A grand celebration of God's faithfulness and provision throughout the year. Special offerings, testimonies, and worship to close the year with gratitude.",
      location: "Christ Dominion Temple",
      icon: "🌾",
    },
    {
      date: "December 24, 2026",
      time: "Christmas Season",
      title: "CAROLS & Year-End Celebration",
      description: "Celebrate the birth of Christ with caroling, special services, and thanksgiving for God's blessings throughout the year.",
      location: "Christ Dominion Temple",
      icon: "🎄",
    },
    {
      date: "December 27-29, 2026",
      time: "Weekend",
      title: "WORSHIP AND PRAISES",
      description: "End the year on a high note with powerful worship, testimonies of God's faithfulness, and praise gatherings.",
      location: "Christ Dominion Temple",
      icon: "⛪",
    },
  ]

  const regularEvents = [
    { day: "Every Sunday", time: "8:00 AM", event: "Morning Devotional Hour", description: "Quiet time with God before the main service" },
    { day: "Every Sunday", time: "10:30 AM", event: "Main Worship Service", description: "Inspirational worship and teaching" },
    { day: "Every Tuesday", time: "7:00 - 8:30 PM", event: "Evening Service", description: "Prayer, worship, and Bible study" },
    { day: "Every Wednesday", time: "9:00 - 11:00 AM", event: "Fasting & Prayers", description: "Intercession and spiritual strengthening" },
    { day: "Every Thursday", time: "7:00 - 8:00 PM", event: "Prayer Service", description: "Fervent prayer for the church and community" },
    { day: "First Sunday", time: "During Service", event: "Communion", description: "Remember the sacrifice of Christ" },
    { day: "Last Friday", time: "6:00 - 7:00 PM", event: "Women's Prayer Meeting", description: "Dedicated intercession for women" },
    { day: "15th-17th Weekly", time: "3 Days", event: "Fasting & Prayers", description: "Monthly period of intensive intercession" },
    { day: "3rd Thursday", time: "All Day", event: "Leaders Meeting", description: "Ministry leadership gathering" },
    { day: "First Sunday", time: "During Service", event: "Birthday Celebration", description: "Celebrate church member birthdays" },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Upcoming Events"
        subtitle="Join us for life-changing gatherings and community impact"
        imageBg="linear-gradient(135deg, rgba(45, 85, 120, 0.8), rgba(30, 60, 90, 0.8))"
      />

      {/* Regular Services & Activities */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
              Regular Services & Activities
            </motion.h2>
            <motion.p variants={itemVariants} className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Build your spiritual life through our consistent programs and gatherings designed to strengthen your faith and deepen your connection with God.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularEvents.map((event, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-6 h-full border-2 border-border hover:border-primary transition-colors">
                    <div>
                      <p className="text-sm text-primary font-semibold mb-2">{event.day}</p>
                      <h3 className="text-lg font-bold text-foreground mb-2">{event.event}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{event.time}</p>
                      <p className="text-xs text-muted-foreground italic">{event.description}</p>
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
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
              2026 Church Events
            </motion.h2>
            <motion.p variants={itemVariants} className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Discover the exciting events and programs planned for Christ Dominion Temple throughout 2026. From spiritual renewal to community impact, find your place in our church calendar.
            </motion.p>
            <div className="space-y-4 mb-12">
              {upcomingEvents.map((event, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow hover:border-l-primary/80">
                    <div className="flex gap-4">
                      <div className="text-3xl flex-shrink-0">{event.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                          <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                          <span className="text-sm text-primary font-semibold whitespace-nowrap">{event.date}</span>
                        </div>
                        <p className="text-muted-foreground mb-3">{event.description}</p>
                        <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4 flex-shrink-0" /> {event.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 flex-shrink-0" /> {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Church Calendar Image Section */}
            <motion.div variants={itemVariants} className="mt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Complete 2026 Church Calendar</h2>
              <div className="bg-card p-4 rounded-lg overflow-x-auto">
                <Image
                  src="/church-calendar-2026.jpg"
                  alt="Christ Dominion Temple 2026 Church Calendar"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              <div className="text-center mt-6">
                <p className="text-muted-foreground text-sm mb-4">
                  Download or print this calendar to keep track of all church events, services, and special programs throughout the year.
                </p>
                <a href="/church-calendar-2026.jpg" download="Christ-Dominion-Temple-2026-Calendar.jpg">
                  <Button className="bg-primary hover:bg-primary/90 gap-2 cursor-pointer">
                    Download Calendar
                  </Button>
                </a>
              </div>
            </motion.div>
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
