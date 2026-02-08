"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import GalleryLightbox from "@/components/gallery-lightbox"

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

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
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
            category: "Women",
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
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1770526285/WhatsApp_Image_2026-01-09_at_10.43.41_mk9kc5.jpg",
            alt: "Youth's on Jersey",
            category: "Youth",
            title: "Youth Gathering",
        },
        {
            id: 7,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1770526274/WhatsApp_Image_2026-01-18_at_14.40.39_orrb5l.jpg",
            alt: "Children's ministry teachers",
            category: "Children",
            title: "Children's Ministry Teachers",
        },
        {
            id: 8,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1770526268/WhatsApp_Image_2026-01-26_at_06.15.37_tt5642.jpg",
            alt: "Ushering team in action",
            category: "Ushers",
            title: "Ushering Team",
        },
        {
            id: 9,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1770526263/WhatsApp_Image_2026-01-18_at_14.34.58_1_k2iq77.jpg",
            alt: "Dominion dancers performing",
            category: "Dancers",
            title: "Dominion Dancers Team",
        },
        {
            id: 10,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1770526262/WhatsApp_Image_2026-01-18_at_14.43.43_2_xvg9wq.jpg",
            alt: "Dominion Media team at work",
            category: "Media",
            title: "Dominion Media Team",
        },
        {
            id: 11,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1770529692/WhatsApp_Image_2026-01-18_at_15.49.53_gafuna.jpg",
            alt: "Church vide",
            category: "Vibe",
            title: "After church vibe",
        },
        {
            id: 12,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1770529690/WhatsApp_Image_2026-01-11_at_14.37.27_cqwtod.jpg",
            alt: "Dominion Youth Executive",
            category: "Youth",
            title: "Dominion Youth Executive",
        },
        {
            id: 13,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1769303594/WhatsApp_Image_2026-01-18_at_14.40.45_vqafdf.jpg",
            alt: "Dominion Vibe",
            category: "Vibe",
            title: "After church vibe",
        },
        {
            id: 14,
            src: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1770529692/WhatsApp_Image_2026-01-20_at_00.30.34_2_t0ipso.jpg",
            alt: "Dominion Vibe",
            category: "Vibe",
            title: "After church vibe - Rockson & Clinton",
        },
    ]

    const handleImageClick = (index: number) => {
        setLightboxIndex(index)
        setLightboxOpen(true)
    }

    const categories = ["All", "Vibe", "Women", "Men", "Ministry", "Youth", "Children", "Media", "Dancers", "Ushers"]

    const filteredImages =
        selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

    return (
        <main className="flex flex-col min-h-screen">
            <PageHero title="Our Gallery" subtitle="Moments of faith, fellowship, and service" />

            <section className="py-16 md:py-24 bg-background">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {/* Category Filter */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center mb-12">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    variant={selectedCategory === category ? "default" : "outline"}
                                    className={
                                        selectedCategory === category
                                            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                                            : "border-2 border-border hover:border-primary"
                                    }
                                >
                                    {category}
                                </Button>
                            ))}
                        </motion.div>

                        {/* Gallery Grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredImages.map((image, idx) => {
                                const imageIndex = galleryImages.findIndex((img) => img.id === image.id)
                                return (
                                    <motion.div
                                        key={image.id}
                                        variants={itemVariants}
                                        className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                                        onClick={() => handleImageClick(imageIndex)}
                                    >
                                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-muted">
                                            <Image
                                                src={image.src || "/placeholder.svg"}
                                                alt={image.alt}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            {/* Overlay on Hover */}
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-between p-4">
                                                <div className="w-full text-white text-right">
                                                    <p className="font-semibold text-sm md:text-base">{image.title || image.category}</p>
                                                    <p className="text-xs md:text-sm opacity-90">{image.category}</p>
                                                </div>
                                                <p className="text-xs text-gray-200">Click to enlarge</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>

                        {/* Empty State */}
                        {filteredImages.length === 0 && (
                            <motion.div variants={itemVariants} className="text-center py-12">
                                <p className="text-lg text-muted-foreground">No images found in this category.</p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <GalleryLightbox images={galleryImages} initialIndex={lightboxIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} />

            {/* Contact Section */}
            <section className="py-16 md:py-24 bg-card">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
                            Share Your Moments
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-muted-foreground mb-8">
                            Have a special photo from our church? We'd love to feature it in our gallery. Contact us to submit your
                            images.
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <a href="mailto:gallery@christdominion.com">
                                <Button className="bg-primary hover:bg-primary/90">Send Us Your Photos</Button>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
