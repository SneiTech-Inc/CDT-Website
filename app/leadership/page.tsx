"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import PageHero from "@/components/page-hero"
import Image from "next/image"

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

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Rev Williams Oduro",
      title: "Head / Senior Pastor",
      bio: "With over 20 years of ministry experience, Pastor John leads the vision of Christ Dominion Temple with passion and biblical wisdom.",
      image: "/pastor-john.jpg",
    },
    {
      name: "Deacon Nkrumah Aayapong",
      title: "Board Member",
      bio: "Dedicated to discipleship and women's empowerment, Pastor Grace brings vibrant energy to our spiritual community.",
      image: "/pastor-grace.jpg",
    },
    {
      name: "Deacon Prince",
      title: "Secretary - Board Member",
      bio: "Passionate about the next generation, Pastor Samuel equips young people to become kingdom builders and leaders.",
      image: "/pastor-samuel.jpg",
    },
    {
      name: "Deaconess Dora Owusu Ansah",
      title: "Board Member",
      bio: "With a heart for the little ones, Pastor Ama creates a nurturing environment for spiritual development in children.",
      image: "/pastor-ama.jpg",
    },
    {
      name: "Deaconess Sandra Ntim",
      title: "Treasurer - Board Member",
      bio: "Committed to reaching the lost and making disciples, Evangelist David leads our community engagement efforts.",
      image: "/evangelist-david.jpg",
    },
    {
      name: "Brother Michael Asante",
      title: "Board Member",
      bio: "Leading worship experiences that connect hearts with God's presence, Michael brings anointed musical leadership.",
      image: "/michael-worship.jpg",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Our Leadership"
        subtitle="Meet the dedicated servants leading Christ Dominion Temple"
        imageBg="linear-gradient(135deg, rgba(45, 85, 120, 0.8), rgba(30, 60, 90, 0.8))"
      />

      {/* Leadership Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground text-center leading-relaxed">
              Our leadership team is committed to pastoral excellence, spiritual integrity, and servant-hearted
              ministry. Each leader brings unique gifts and years of experience in advancing the kingdom of God.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="overflow-hidden border-2 border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="relative w-full h-64 bg-muted overflow-hidden">
                      <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                      <p className="text-primary font-semibold mb-4">{leader.title}</p>
                      <p className="text-muted-foreground text-sm flex-grow">{leader.bio}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Our Leadership Philosophy
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                We believe that true leadership is characterized by servant-heartedness, humility, and submission to the
                Holy Spirit. Our leaders are committed to the spiritual welfare of the flock and to modeling Christ-like
                character in all they do.
              </p>
              <p className="leading-relaxed">
                Each team member is dedicated to biblical teaching, prophetic ministry, and empowering believers for
                personal spiritual growth and kingdom impact. We lead not by authority alone, but by example and
                integrity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
