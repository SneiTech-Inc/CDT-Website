"use client"

import React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryImage {
    id: number
    src: string
    alt: string
    category: string
    title?: string
}

interface GalleryLightboxProps {
    images: GalleryImage[]
    initialIndex: number
    isOpen: boolean
    onClose: () => void
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
}

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
}

const imageVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
}

export default function GalleryLightbox({ images, initialIndex, isOpen, onClose }: GalleryLightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    // Sync currentIndex when initialIndex changes
    useEffect(() => {
        setCurrentIndex(initialIndex)
    }, [initialIndex, isOpen])

    const currentImage = images[currentIndex]

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }, [images.length])

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, [images.length])

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goToPrevious()
            if (e.key === "ArrowRight") goToNext()
            if (e.key === "Escape") onClose()
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, goToPrevious, goToNext, onClose])

    // Touch/Swipe handling
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.clientX || e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.clientX || e.changedTouches[0].clientX
        handleSwipe()
    }

    const handleSwipe = () => {
        const swipeThreshold = 50
        const difference = touchStartX.current - touchEndX.current

        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                goToNext()
            } else {
                goToPrevious()
            }
        }
    }

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                >
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 text-white hover:bg-white/20 rounded-lg transition-colors duration-200"
                            aria-label="Close lightbox"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex flex-col">
                            {/* Image */}
                            <motion.div
                                key={currentImage.id}
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="relative flex-1 flex items-center justify-center"
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                            >
                                <Image
                                    src={currentImage.src || "/placeholder.svg"}
                                    alt={currentImage.alt}
                                    fill
                                    className="object-contain"
                                    priority
                                    quality={90}
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                />
                            </motion.div>

                            {/* Caption and Counter */}
                            <div className="bg-black/60 text-white p-4 md:p-6 rounded-b-lg">
                                <div className="max-w-5xl mx-auto">
                                    <h3 className="text-lg md:text-xl font-semibold mb-2">{currentImage.title || currentImage.alt}</h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm md:text-base text-gray-300">{currentImage.category}</p>
                                        <p className="text-sm md:text-base text-gray-400">
                                            {currentIndex + 1} / {images.length}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Arrows */}
                            {images.length > 1 && (
                                <>
                                    {/* Previous Button */}
                                    <button
                                        onClick={goToPrevious}
                                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                                    </button>

                                    {/* Next Button */}
                                    <button
                                        onClick={goToNext}
                                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 text-white hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                                    </button>

                                    {/* Thumbnail Indicators */}
                                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center max-w-[90%]">
                                        {images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentIndex(idx)}
                                                className={`w-2 h-2 rounded-full transition-all duration-200 ${idx === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
                                                    }`}
                                                aria-label={`Go to image ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
