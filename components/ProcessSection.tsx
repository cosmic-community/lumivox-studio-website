import SectionHeading from "@/components/SectionHeading"

const steps = [
  {
    title: "Discovery",
    description: "We align on ambition, audience, and the premium perception we need to create."
  },
  {
    title: "Direction",
    description: "Visual systems, product thinking, and brand strategy come together."
  },
  {
    title: "Design",
    description: "Crafted interfaces, identities, and experiences built with intention."
  },
  {
    title: "Delivery",
    description: "Launch-ready assets, design systems, and continuous refinements."
  }
]

export default function ProcessSection({ headline }: { headline: string }) {
  return (
    <section id="process" className="py-20 bg-obsidian">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Process"
          headline={headline}
          description="A refined, four-step system to move from strategy to market-ready design."
        />
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-canvas p-6"
            >
              <p className="text-iris text-sm mb-3">0{index + 1}</p>
              <h3 className="text-lg font-display mb-2">{step.title}</h3>
              <p className="text-pewter text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}