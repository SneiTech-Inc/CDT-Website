"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const departments = [
  { name: "Women's Ministry", href: "/departments/womens-ministry" },
  { name: "Men's Ministry", href: "/departments/mens-ministry" },
  { name: "Youth Ministry", href: "/departments/youth-ministry" },
  { name: "Children's Ministry", href: "/departments/childrens-ministry" },
  { name: "Sunday School Ministry", href: "/departments/sunday-school" },
  { name: "Welfare Department", href: "/departments/welfare" },
  { name: "Dominion Singers", href: "/departments/singers" },
  { name: "Dominion Ushers", href: "/departments/ushers" },
  { name: "Dominion Dancers", href: "/departments/dancers" },
  { name: "DomDia (Media Department)", href: "/departments/media" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [departmentsOpen, setDepartmentsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0 hover:opacity-90 transition-opacity duration-200"
          >
            <Image
              src="/cdt-logo.png"
              alt="Christ Dominion Temple Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="hidden sm:inline font-bold text-foreground text-sm">Christ Dominion Temple</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0">
            <Link href="/">
              <Button
                variant="ghost"
                className="cursor-pointer text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-md"
              >
                Home
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="ghost"
                className="cursor-pointer text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-md"
              >
                About Us
              </Button>
            </Link>
            <Link href="/leadership">
              <Button
                variant="ghost"
                className="cursor-pointer text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-md"
              >
                Leadership
              </Button>
            </Link>

            <div className="relative group">
              <Link href="/departments">
                <button className="cursor-pointer flex items-center gap-1 px-4 py-2 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-md">
                  Departments
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
              </Link>

              {/* Dropdown Menu - appears on hover */}
              <div className="absolute left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                <div className="py-2">
                  {departments.map((dept, index) => (
                    <Link key={dept.href} href={dept.href}>
                      <button className="w-full text-left px-4 py-2 cursor-pointer text-foreground hover:bg-primary/10 hover:text-primary hover:pl-6 transition-all duration-150 text-sm">
                        {dept.name}
                      </button>
                    </Link>
                  ))}
                  <div className="border-t border-border my-2" />
                  <Link href="/departments">
                    <button className="w-full text-left px-4 py-2 cursor-pointer text-primary font-semibold hover:bg-primary/10 hover:pl-6 transition-all duration-150 text-sm">
                      Explore All Departments
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/events">
              <Button
                variant="ghost"
                className="cursor-pointer text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-md"
              >
                Events
              </Button>
            </Link>
            <Link href="/giving">
              <Button
                variant="ghost"
                className="cursor-pointer text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-md"
              >
                Give
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                className="cursor-pointer text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-md"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 cursor-pointer hover:bg-primary/10 rounded-lg transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 space-y-2 overflow-hidden"
            >
              <Link href="/">
                <Button
                  variant="ghost"
                  className="w-full cursor-pointer justify-start text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  Home
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="ghost"
                  className="w-full cursor-pointer justify-start text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  About Us
                </Button>
              </Link>
              <Link href="/leadership">
                <Button
                  variant="ghost"
                  className="w-full cursor-pointer justify-start text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  Leadership
                </Button>
              </Link>

              {/* Mobile Departments */}
              <div className="space-y-1 px-2">
                <p className="text-sm font-semibold text-muted-foreground px-2">Departments</p>
                {departments.map((dept) => (
                  <Link key={dept.href} href={dept.href}>
                    <Button
                      variant="ghost"
                      className="w-full cursor-pointer justify-start text-sm text-foreground hover:bg-primary/10 hover:text-primary hover:pl-8 transition-all duration-200"
                    >
                      {dept.name}
                    </Button>
                  </Link>
                ))}
                <Link href="/departments">
                  <Button
                    variant="ghost"
                    className="w-full cursor-pointer justify-start text-sm text-primary font-semibold hover:bg-primary/10 hover:pl-8 transition-all duration-200"
                  >
                    Explore All Departments
                  </Button>
                </Link>
              </div>

              <Link href="/events">
                <Button
                  variant="ghost"
                  className="w-full cursor-pointer justify-start text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  Events
                </Button>
              </Link>
              <Link href="/giving">
                <Button
                  variant="ghost"
                  className="w-full cursor-pointer justify-start text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  Give
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="ghost"
                  className="w-full cursor-pointer justify-start text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}