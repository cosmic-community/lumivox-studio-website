export default function CTASection({
  headline,
  ctaText
}: {
  headline: string
  ctaText: string
}) {
  return (
    <section id="contact" className="py-20 bg-obsidian">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-[32px] p-12 md:p-16 bg-gradient-to-br from-iris/40 via-canvas to-coral/40 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-display mb-4">{headline}</h2>
          <p className="text-pewter mb-8">
            Let’s shape a brand, product, or platform that feels instantly premium.
          </p>
          <a
            href="mailto:hello@lumivox.studio"
            className="inline-flex px-8 py-4 rounded-full bg-iris text-white font-medium hover:bg-coral transition-colors"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  )
}