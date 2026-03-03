export default function Hero({
  heading,
  subheading,
  ctaText
}: {
  heading: string
  subheading: string
  ctaText: string
}) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-obsidian relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-mesh-gradient opacity-80" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-iris/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral/30 blur-[140px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <p className="text-pewter uppercase tracking-[0.4em] text-xs">
          Lumivox Studio
        </p>
        <h1 className="text-4xl md:text-6xl font-display leading-tight">
          {heading}
        </h1>
        <p className="text-pewter text-lg md:text-xl">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-iris text-white font-medium hover:bg-coral transition-colors shadow-glow"
          >
            {ctaText}
          </a>
          <a
            href="#work"
            className="px-8 py-4 rounded-full border border-white/15 text-linen hover:border-iris transition-colors"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  )
}