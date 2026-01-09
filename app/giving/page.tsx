"use client"

import { motion } from "framer-motion"
import { Heart, DollarSign, Smartphone, Building2, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

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
    transition: { duration: 0.5 },
  },
}

export default function GivingPage() {
  const [copiedAccount, setCopiedAccount] = useState(false)
  const [copiedMomo, setCopiedMomo] = useState(false)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    if (type === "account") {
      setCopiedAccount(true)
      setTimeout(() => setCopiedAccount(false), 2000)
    } else {
      setCopiedMomo(true)
      setTimeout(() => setCopiedMomo(false), 2000)
    }
  }

  const handlePaystackPayment = () => {
    // Redirect to Paystack payment initialization
    // You'll need to set up the NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY env var
    window.location.href = "/api/payment/paystack"
  }

  const handleHubtelPayment = () => {
    // Redirect to Hubtel payment initialization
    // You'll need to set up the HUBTEL_API_KEY env var
    window.location.href = "/api/payment/hubtel"
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center mb-12">
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Heart className="w-12 h-12 text-primary" />
            </div>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sow Your Seed, Reap Your Harvest
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your generous giving supports our mission to spread the Gospel, help those in need, and build a stronger
            community. Every contribution, regardless of size, makes a Kingdom impact.
          </motion.p>
        </motion.div>
      </section>

      {/* Bank Account & Mobile Money Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Bank Account */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border border-primary/10 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Bank Transfer</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-muted-foreground block mb-2">Bank Name</label>
                <p className="text-lg text-foreground font-medium">Stanbic Bank Ghana</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-muted-foreground block mb-2">Account Name</label>
                <p className="text-lg text-foreground font-medium">Christ Dominion Temple</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-muted-foreground block mb-2">Account Number</label>
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                  <p className="text-lg font-mono font-bold text-primary">0012345678</p>
                  <button
                    onClick={() => copyToClipboard("0012345678", "account")}
                    className="ml-auto p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    {copiedAccount ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Money */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border border-primary/10 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Mobile Money</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-muted-foreground block mb-2">Mobile Network</label>
                <p className="text-lg text-foreground font-medium">MTN Mobile Money & Vodafone Cash</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-muted-foreground block mb-2">Church Name</label>
                <p className="text-lg text-foreground font-medium">Christ Dominion Temple</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-muted-foreground block mb-2">Mobile Money Number</label>
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                  <p className="text-lg font-mono font-bold text-primary">+233 50 XXX XXXX</p>
                  <button
                    onClick={() => copyToClipboard("+233 50 XXX XXXX", "momo")}
                    className="ml-auto p-2 hover:bg-primary/10 rounded-lg transition-colors"
                  >
                    {copiedMomo ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Online Payment Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 text-foreground">
            Give Online
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Paystack Payment */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border border-primary/10 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Paystack</h3>
                <p className="text-muted-foreground">Pay securely with your Visa Card or Mobile Money</p>
              </div>

              <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Visa & Mastercard
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> MTN & Vodafone
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Instant Receipt
                </div>
              </div>

              <Button
                onClick={handlePaystackPayment}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Give via Paystack
              </Button>
            </motion.div>

            {/* Hubtel Payment */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border border-primary/10 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Hubtel</h3>
                <p className="text-muted-foreground">Simple & secure payment with Ghana payment systems</p>
              </div>

              <div className="space-y-3 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> All Cards
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Mobile Money
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Bank Transfer
                </div>
              </div>

              <Button
                onClick={handleHubtelPayment}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Give via Hubtel
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Give Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-primary/5 rounded-2xl my-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Your Gift Matters
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kingdom Growth",
                description: "Support evangelism and mission work spreading the Gospel across Ghana and beyond.",
              },
              {
                title: "Community Care",
                description: "Help us reach the vulnerable through welfare programs and social interventions.",
              },
              {
                title: "Worship Excellence",
                description: "Enable our departments to serve with excellence and impact lives spiritually.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
