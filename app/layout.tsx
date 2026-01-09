import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Christ Dominion Temple - Assemblies of God Ghana",
  description:
    "Christ Dominion Temple is a spirit-led Pentecostal church committed to the full Gospel, evangelism, missions, and community impact in Kumasi, Ghana.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1767953805/WhatsApp_Image_2026-01-08_at_09.08.51_cx7f6m.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1767953805/WhatsApp_Image_2026-01-08_at_09.08.51_cx7f6m.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1767953805/WhatsApp_Image_2026-01-08_at_09.08.51_cx7f6m.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "https://res.cloudinary.com/schneider-tech-inc/image/upload/v1767953805/WhatsApp_Image_2026-01-08_at_09.08.51_cx7f6m.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
