"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const departments = [
  {
    name: "Women's Ministry",
    href: "/departments/womens-ministry",
    description: "Empowering women through faith, fellowship, and spiritual growth",
    color: "from-pink-500 to-rose-500",
    icon: "👩‍🤝‍👩",
  },
  {
    name: "Men's Ministry",
    href: "/departments/mens-ministry",
    description: "Building strong, godly men who lead with integrity and purpose",
    color: "from-blue-500 to-indigo-500",
    icon: "👨‍🤝‍👨",
  },
  {
    name: "Youth Ministry",
    href: "/departments/youth-ministry",
    description: "Engaging young people in spiritual development and kingdom purpose",
    color: "from-green-500 to-emerald-500",
    icon: "🎯",
  },
  {
    name: "Children's Ministry",
    href: "/departments/childrens-ministry",
    description: "Nurturing children's faith and creating a joyful learning environment",
    color: "from-yellow-500 to-orange-500",
    icon: "👶",
  },
  {
    name: "Sunday School Ministry",
    href: "/departments/sunday-school",
    description: "Providing comprehensive biblical education for all ages",
    color: "from-purple-500 to-pink-500",
    icon: "📚",
  },
  {
    name: "Welfare Department",
    href: "/departments/welfare",
    description: "Serving the community with compassion and practical help",
    color: "from-red-500 to-orange-500",
    icon: "❤️",
  },
  {
    name: "Dominion Singers",
    href: "/departments/singers",
    description: "Praising God through musical excellence and worship",
    color: "from-cyan-500 to-blue-500",
    icon: "🎵",
  },
  {
    name: "Dominion Ushers",
    href: "/departments/ushers",
    description: "Welcoming guests with warmth and facilitating smooth services",
    color: "from-gray-600 to-slate-700",
    icon: "🤝",
  },
  {
    name: "Dominion Dancers",
    href: "/departments/dancers",
    description: "Expressing worship and ministry through sacred dance",
    color: "from-fuchsia-500 to-purple-500",
    icon: "💃",
  },
  {
    name: "DomDia (Media Department)",
    href: "/departments/media",
    description: "Extending God's message through modern media and technology",
    color: "from-indigo-600 to-purple-600",
    icon: "📹",
  },
]

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
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Our <span className="text-primary">Departments</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Christ Dominion Temple has various ministries and departments dedicated to serving God and the community.
              Find your calling and get involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {departments.map((dept, index) => (
              <motion.div key={dept.href} variants={itemVariants}>
                <Link href={dept.href}>
                  <div className="h-full cursor-pointer group bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                    {/* Header with gradient background */}
                    <div
                      className={`h-32 bg-gradient-to-br ${dept.color} flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10" />
                      <span className="text-5xl z-10 group-hover:scale-110 transition-transform duration-300">
                        {dept.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                        {dept.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Find Your Ministry Home</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover where God is calling you to serve and make a difference in our church community.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 cursor-pointer">
                Get Involved Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
