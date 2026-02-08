"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import GalleryLightbox from "@/components/gallery-lightbox"

interface GalleryImage {
    id: number
    src: string
    alt: string
    category: string
    title?: string
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

export default function GalleryPreview() {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)

    const galleryImages = [
        {
            id: 1,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768699924/WhatsApp_Image_2026-01-17_at_17.06.11_iv8845.jpg",
            alt: "Pastor preaching to the congregation",
            category: "Preaching",
            title: "The Father of the House - Rev Williams Oduro",
        },
        {
            id: 2,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1770526277/WhatsApp_Image_2026-01-18_at_14.38.25_1_wcm2vn.jpg",
            alt: "Church members group photo",
            category: "Women'",
            title: "Women's Ministry Executive",
        },
        {
            id: 3,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768431356/WhatsApp_Image_2025-12-01_at_12.12.28_bazcib.jpg",
            alt: "Dominion Singers choir performance",
            category: "Ministry",
            title: "Dominion Singers Ministry",
        },
        {
            id: 4,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769308295/WhatsApp_Image_2025-12-01_at_12.12.29_1_mc5ewz.jpg",
            alt: "Dominion Singers choir performance",
            category: "Ministry",
            title: "Dominion Singers Ministry",
        },
        {
            id: 5,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1768430502/WhatsApp_Image_2026-01-09_at_10.43.20_rhdzeg.jpg",
            alt: "Youth ministry gathering",
            category: "Youth",
            title: "Youth Ministry Gathering",
        },
        {
            id: 6,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1770526268/WhatsApp_Image_2026-01-26_at_06.15.37_tt5642.jpg",
            alt: "Dominion Ushers Teams",
            category: "Ushers",
            title: "Dominion Ushers Teams",
        },
    ]

    const handleImageClick = (index: number) => {
        setLightboxIndex(index)
        setLightboxOpen(true)
    }

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center mb-4">
                        Our Church Gallery
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                        Moments of worship, fellowship, and service captured from our church programs and special occasions
                    </motion.p>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {galleryImages.map((image, idx) => (
                            <motion.div
                                key={image.id}
                                variants={itemVariants}
                                className="relative group overflow-hidden rounded-lg cursor-pointer"
                                onClick={() => handleImageClick(idx)}
                            >
                                <div className="relative h-64 w-full overflow-hidden rounded-lg bg-muted">
                                    <Image
                                        src={image.src || "/placeholder.svg"}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-semibold text-center px-4">{image.title || image.category}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants} className="text-center">
                        <Link href="/gallery">
                            <Button className="bg-primary hover:bg-primary/90 gap-2 text-base py-6 px-8">
                                Explore Our Gallery
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Lightbox Modal */}
                <GalleryLightbox images={galleryImages} initialIndex={lightboxIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} />
            </div>
        </section>
    )
}
