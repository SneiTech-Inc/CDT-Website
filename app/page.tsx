"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import HeroVideo from "@/components/hero-video"
import AnnualThemeSection from "@/components/annual-theme-section"
import HeroCarousel from "@/components/hero-carousel"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Image Carousel */}
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground"
            >
              Welcome to Christ Dominion Temple
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground text-center mb-8">
              A spirit-led Pentecostal church committed to embracing the full Gospel, fostering deep fellowship, and
              transforming lives through the power of God's Word.
            </motion.p>
            <motion.div variants={itemVariants} className="text-center">
              <Link href="#services">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Join Us This Sunday
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Annual Theme Video Section */}
      <AnnualThemeSection />

      {/* Service Times */}
      <section id="services" className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Service Times
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { day: "Sunday", time: "8:30 AM - 11:00 AM", service: "Main Worship Service" },
                { day: "Tuesday", time: "7:00 PM - 8:30 PM", service: "Bible Study" },
                { day: "Thursday", time: "7:00 PM - 8:00 PM", service: "Prayer Meeting" },
              ].map((schedule, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-6 border-2 border-border hover:border-primary transition-colors h-full">
                    <h3 className="text-xl font-bold text-primary mb-2">{schedule.day}</h3>
                    <p className="text-2xl font-semibold text-foreground mb-2">{schedule.time}</p>
                    <p className="text-muted-foreground">{schedule.service}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Ministries
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Women's Ministry", icon: "👩", href: "/departments/womens-ministry" },
                { name: "Men's Ministry", icon: "👨", href: "/departments/mens-ministry" },
                { name: "Youth Ministry", icon: "🎯", href: "/departments/youth-ministry" },
                { name: "Children's Ministry", icon: "👶", href: "/departments/childrens-ministry" },
                { name: "Dominion Singers", icon: "🎤", href: "/departments/singers" },
                { name: "Sunday School Ministry", icon: "📚", href: "/departments/sunday-school" },
              ].map((ministry, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Link href={ministry.href}>
                    <Card className="p-6 border-2 border-border hover:border-primary hover:bg-card/50 transition-all cursor-pointer h-full flex flex-col items-center justify-center text-center">
                      <span className="text-4xl mb-4">{ministry.icon}</span>
                      <h3 className="text-lg font-semibold text-foreground">{ministry.name}</h3>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/departments">
                <Button variant="outline" className="gap-2 bg-transparent">
                  Explore All Departments <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Upcoming Events
            </motion.h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  date: "Jan 05, 2026 to Jan 18, 2026",
                  title: "Fasting & Prayer Week",
                  desc: "A week dedicated to spiritual renewal and seeking God's face",
                },
                {
                  date: "Jan 22, 2026",
                  title: "Women's Prayer Breakfast",
                  desc: "Fellowship and intercession for our women",
                },
                { date: "Feb 1, 2026", title: "Community Outreach", desc: "Serving our neighborhood with love" },
              ].map((event, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="text-sm text-primary font-semibold mb-1">{event.date}</p>
                        <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                        <p className="text-muted-foreground mt-2">{event.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/events">
                <Button className="bg-primary hover:bg-primary/90 gap-2">
                  View All Events <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
              Jesus Reigns Everywhere
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg mb-8 opacity-90">
              Join our growing family and experience the transforming power of God's love. We welcome you with open
              arms.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Get in Touch
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
