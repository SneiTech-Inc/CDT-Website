"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import PageHero from "@/components/page-hero"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="About Christ Dominion Temple"
        subtitle="Discover our vision, mission, and the values that guide us"
        imageBg="linear-gradient(135deg, rgba(45, 85, 120, 0.8), rgba(30, 60, 90, 0.8))"
      />

      {/* Church Background */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Story
            </motion.h2>
            <motion.div variants={itemVariants} className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Christ Dominion Temple is a local church operating autonomously under the doctrine, practice, and
                guidance of the Assemblies of God, Ghana. Founded on the principles of the full Gospel, we are committed
                to embracing the Word of God in its entirety.
              </p>
              <p>
                We believe in the power of God's Word and the transformative work of the Holy Spirit. Our church is
                dedicated to fostering authentic fellowship, engaging in meaningful evangelism, and making a tangible
                impact in our community through social action and spiritual growth.
              </p>
              <p>
                As a local church within the Assemblies of God movement, we maintain our autonomy while benefiting from
                the support, fellowship, and doctrinal guidance of our denomination. This unique positioning allows us
                to tailor our ministry to the specific needs of Kumasi while remaining grounded in biblical principles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mission & Vision
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Our Mission",
                  content:
                    "To proclaim the full Gospel of Jesus Christ, equip believers for spiritual growth, engage in missions and evangelism, and serve our community with compassion and integrity, all while nurturing fellowship and prayer.",
                  icon: "🎯",
                },
                {
                  title: "Our Vision",
                  content:
                    "A thriving, spirit-led church where Jesus Christ reigns in every life, demonstrating kingdom values through authentic discipleship, prophetic ministry, social justice, and the manifest presence of God.",
                  icon: "👁️",
                },
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-8 border-2 border-border h-full">
                    <span className="text-5xl mb-4 block">{item.icon}</span>
                    <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                    <p className="text-foreground leading-relaxed">{item.content}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-12">
              What We Believe
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "The Authority of Scripture",
                  desc: "We believe the Bible, both Old and New Testaments, is verbally inspired by God and serves as the infallible and authoritative rule for faith and conduct.",
                },
                {
                  title: "The One True God",
                  desc: "We believe in one true God, eternally existing as Father, Son, and Holy Spirit, the Creator of heaven and earth and the Redeemer of mankind.",
                },
                {
                  title: "Jesus Christ",
                  desc: "We believe in the deity of our Lord Jesus Christ — His virgin birth, sinless life, miracles, atoning death, bodily resurrection, and exaltation at the right hand of God.",
                },
                {
                  title: "Salvation Through Christ Alone",
                  desc: "Salvation is received through repentance toward God and faith in the Lord Jesus Christ, made possible by His shed blood and saving grace.",
                },
                {
                  title: "The Baptism in the Holy Spirit",
                  desc: "All believers are entitled to and should earnestly seek the baptism in the Holy Spirit, empowering them for Christian life and service.",
                },
                {
                  title: "Evidence of the Holy Spirit",
                  desc: "The initial physical evidence of the baptism in the Holy Spirit is speaking in other tongues as the Spirit gives utterance.",
                },
                {
                  title: "Sanctification & Holy Living",
                  desc: "We believe in sanctification as an act of separation from evil and dedication unto God, empowered by the Holy Spirit to live a holy life.",
                },
                {
                  title: "The Church and Its Mission",
                  desc: "The Church is the Body of Christ, called to worship God, evangelize the world, and build believers into maturity through the power of the Holy Spirit.",
                },
                {
                  title: "Divine Healing",
                  desc: "We believe divine healing is provided in the atonement and is available to all believers through prayer and faith in Jesus Christ.",
                },
                {
                  title: "The Blessed Hope",
                  desc: "We believe in the imminent return of Jesus Christ — the resurrection of believers, the millennial reign, final judgment, and the promise of a new heaven and a new earth.",
                },
              ].map((belief, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow h-full">
                    <h3 className="text-lg font-bold text-foreground mb-2">{belief.title}</h3>
                    <p className="text-muted-foreground">{belief.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is a Local Church */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
              A Local Church in the Assemblies of God
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg opacity-95 mb-4 leading-relaxed">
              Christ Dominion Temple operates as an autonomous local church within the Assemblies of God, Ghana. This
              means we maintain our independence in day-to-day operations and governance while remaining committed to
              the doctrinal standards and supportive network of the Assemblies of God.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg opacity-95 mb-4 leading-relaxed">
              As a local church, we are directly accountable to our congregation and the Holy Spirit, while benefiting
              from the fellowship, resources, training, and pastoral oversight provided by the broader AG network. This
              allows us to minister effectively within our local context while maintaining alignment with our
              denomination's vision and values.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg opacity-95 mb-4 leading-relaxed">
              Our autonomy empowers us to be responsive to the specific needs of Kumasi and its surrounding communities,
              while our connection to the Assemblies of God ensures doctrinal soundness, accountability, and access to
              resources that help us fulfill the Great Commission.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg opacity-95 leading-relaxed">
              Christ Dominion Temple adheres to the Statement of Fundamental Truths of the Assemblies of God.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
