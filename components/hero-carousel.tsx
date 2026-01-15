"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0)

    const images = [
        {
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768430510/WhatsApp_Image_2025-12-01_at_12.12.25_chrygc.jpg",
            alt: "Church members during worship and praise",
        },
        {
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768430505/WhatsApp_Image_2025-12-01_at_12.12.24_bvrosm.jpg",
            alt: "Pastor preaching during service",
        },
        {
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768431331/WhatsApp_Image_2025-12-01_at_12.12.26_jjes9v.jpg",
            alt: "Pastor preaching to congregation",
        },
        {
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768430502/WhatsApp_Image_2026-01-09_at_10.43.20_rhdzeg.jpg",
            alt: "Youths Day",
        },
        {
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768430502/WhatsApp_Image_2026-01-09_at_10.43.20_rhdzeg.jpg",
            alt: "Singers ministering",
        },
        {
            src: "/keyboardist-playing-worship-music.jpg",
            alt: "Keyboardist instrumental worship",
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, 7000)
        return () => clearInterval(interval)
    }, [images.length])

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.img
                    key={current}
                    src={images[current].src}
                    alt={images[current].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
                <motion.div
                    className="text-center text-primary-foreground max-w-2xl mx-auto px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">Christ Dominion Temple</h1>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <p className="text-xl md:text-3xl font-semibold mb-8 text-balance">Jesus Reigns Everywhere</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#services">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                    Join Us This Sunday
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-primary-foreground text-primary-foreground hover:bg-white/10 bg-transparent"
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Carousel indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
                {images.map((_, idx) => (
                    <motion.button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${idx === current ? "bg-primary w-8" : "bg-white/50 hover:bg-white/70"
                            }`}
                        whileHover={{ scale: 1.2 }}
                    />
                ))}
            </div>
        </div>
    )
}
