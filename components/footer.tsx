"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Church Info */}
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-lg mb-4">Christ Dominion Temple</h3>
              <p className="text-sm opacity-90 mb-4 leading-relaxed">
                A spirit-led Pentecostal church committed to the full Gospel, evangelism, missions, and community
                impact.
              </p>
              <div className="flex gap-3">
                <a href="#" className="hover:opacity-75 transition hover:scale-110 duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-75 transition hover:scale-110 duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-75 transition hover:scale-110 duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:opacity-75 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:opacity-75 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/leadership" className="hover:opacity-75 transition">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:opacity-75 transition">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/giving" className="hover:opacity-75 transition">
                    Give
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:opacity-75 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Departments */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4">Departments</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/departments/womens-ministry" className="hover:opacity-75 transition">
                    Women's Ministry
                  </Link>
                </li>
                <li>
                  <Link href="/departments/mens-ministry" className="hover:opacity-75 transition">
                    Men's Ministry
                  </Link>
                </li>
                <li>
                  <Link href="/departments/youth-ministry" className="hover:opacity-75 transition">
                    Youth Ministry
                  </Link>
                </li>
                <li>
                  <Link href="/departments/singers" className="hover:opacity-75 transition">
                    Dominion Singers
                  </Link>
                </li>
                <li>
                  <Link href="/departments/welfare" className="hover:opacity-75 transition">
                    Welfare Department
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Kumasi, Abuakwa Kagyase, Ghana</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Phone className="w-4 h-4" />
                  <span>+233 (0) XXX XXX XXXX</span>
                </li>
                <li className="flex gap-2 items-center">
                  <Mail className="w-4 h-4" />
                  <span>info@christdominiontemple.org</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75 space-y-2"
          >
            <p>
              Copyright © {new Date().getFullYear()} Christ Dominion Temple. All rights reserved. | Assemblies of God,
              Ghana
            </p>
            <p>
              Built and Powered by{" "}
              <a
                href="https://sneitech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:opacity-100 transition-opacity"
              >
                SneiTech Inc
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
