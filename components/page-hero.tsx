interface PageHeroProps {
  title: string
  subtitle: string
  imageBg?: string
}

export default function PageHero({ title, subtitle, imageBg }: PageHeroProps) {
  return (
    <div
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 text-center text-white"
      style={{
        background: imageBg || "linear-gradient(135deg, rgba(40, 80, 110, 0.8), rgba(30, 60, 90, 0.8))",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{title}</h1>
        <p className="text-xl md:text-2xl opacity-90 text-balance">{subtitle}</p>
      </div>
    </div>
  )
}
