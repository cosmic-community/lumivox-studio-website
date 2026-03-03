const logos = ["Aether Finance", "Lumen Labs", "Voltworks", "Nebula", "Kora", "Arcadia"]

export default function LogoStrip() {
  return (
    <section className="py-12 bg-obsidian border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-pewter text-xs uppercase tracking-[0.3em] mb-6">
          Trusted by
        </p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-pewter text-sm">
          {logos.map((logo) => (
            <div key={logo} className="opacity-70 hover:opacity-100 transition-opacity">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}