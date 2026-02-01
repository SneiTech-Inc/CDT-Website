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
      bio: "With over 20 years of ministry experience, Rev Williams Oduro leads the vision of Christ Dominion Temple with passion and biblical wisdom.",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768778532/WhatsApp_Image_2026-01-11_at_15.00.09_dbzib0.jpg",
    },
    {
      name: "Mrs Josephine Oduro",
      title: "Board Member",
      bio: "The pastor's wife, who is the mother of the church and supports the pastor, both physical and spiritual, to take care of God's flock.",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769302063/WhatsApp_Image_2026-01-21_at_14.21.43_psd4yr.jpg",
    },
    {
      name: "Deacon Prince Mensah",
      title: "Secretary - Board Member",
      bio: "Dedicated to effective communication and organizational excellence within our ministry.",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769907451/GEOR0470.jpg_rmdbam.jpg",
    },
    {
      name: "Deaconess Dora Owusu Ansah",
      title: "Women’s Ministry Leader",
      bio: "Committed to nurturing the spiritual growth of our women, Deaconess Dora Owusu Ansah serves with compassion, dedication, and a deep passion for empowering women in the church.",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769907452/WhatsApp_Image_2026-02-01_at_00.42.49_1_b9ogpk.jpg",
    },
    {
      name: "Deaconess Sandra Ntim",
      title: "Treasurer - Board Member",
      bio: "Managing the financial stewardship of our ministry with integrity and transparency.",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769907450/WhatsApp_Image_2026-01-26_at_06.15.20_jzw0mg.jpg",
    },
    {
      name: "Deaconess Mrs Elizabeth Asare (a.k.a Asoreba)",
      title: "Board Member",
      bio: "The encouragement, guidance, and supportive advice or role. In charge of visiting, prayer tower, and evangelism",
      image: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769907451/WhatsApp_Image_2026-02-01_at_00.41.50_ogoidt.jpg",
    },
    {
      name: "Deacon Nkrumah Agyapong",
      title: "Welfare Officer",
      bio: "A senior member of the church, Deacon Nkrumah Agyapong serves as the Welfare Officer, devoted to seeking the welfare of the pastor and family as well as supporting the needs of the church community with care and commitment.",
      image: "/placeholder.svg",
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
                    <div className="relative w-full h-96 bg-muted overflow-hidden">
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
