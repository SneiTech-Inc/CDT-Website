"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import PageHero from "./page-hero"

interface DepartmentLeader {
  name: string
  role: string
  image: string
}

interface DepartmentLayoutProps {
  name: string
  description: string
  vision: string
  mission: string
  leaders: DepartmentLeader[]
  activities: string[]
  imageBg?: string
}

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

export default function DepartmentLayout({
  name,
  description,
  vision,
  mission,
  leaders,
  activities,
  imageBg,
}: DepartmentLayoutProps) {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={name}
        subtitle="Serving with passion and purpose"
        imageBg={imageBg || "linear-gradient(135deg, rgba(45, 85, 120, 0.8), rgba(30, 60, 90, 0.8))"}
      />

      {/* Department Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-foreground">
              About Us
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants}>
                <Card className="p-8 border-2 border-border h-full">
                  <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
                  <p className="text-foreground leading-relaxed">{vision}</p>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="p-8 border-2 border-border h-full">
                  <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
                  <p className="text-foreground leading-relaxed">{mission}</p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Department Leaders */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Leadership Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="overflow-hidden border-2 border-border hover:shadow-lg transition-shadow">
                    <div className="relative w-full h-98 bg-muted">
                      <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-1">{leader.name}</h3>
                      <p className="text-primary font-semibold">{leader.role}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Activities */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
              What We Do
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-6 border-l-4 border-l-primary">
                    <p className="text-foreground leading-relaxed">{activity}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
