import { motion } from "framer-motion";

export default function AnnualThemeSection() {
    return (
        <div className="bg-background">
            <motion.div
                className="px-4 py-12 md:py-16 max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xl md:text-2xl font-semibold text-primary text-center">2026</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-2 text-center uppercase">The Faith of Our Fathers</h2>
                </motion.div>
            </motion.div>

            <section className="relative h-96 md:h-[600px] w-full overflow-hidden bg-black">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="https://res.cloudinary.com/schneider-tech-inc/image/upload/v1767955020/landing-2026_ngumgw.mp4"
                >
                    <source src="https://res.cloudinary.com/schneider-tech-inc/video/upload/v1767955020/landing-2026_ngumgw.mp4" type="video/mp4" />
                </video>

                {/* Subtle dark overlay for better video visibility */}
                <div className="absolute inset-0 bg-black/20" />
            </section>
        </div>
    )
}