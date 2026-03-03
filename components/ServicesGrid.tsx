import type { Service } from "@/types"
import SectionHeading from "@/components/SectionHeading"
import ServiceCard from "@/components/ServiceCard"

export default function ServicesGrid({
  services,
  headline
}: {
  services: Service[]
  headline: string
}) {
  if (!services || services.length === 0) {
    return null
  }

  return (
    <section id="services" className="py-20 bg-obsidian">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Studio Services"
          headline={headline}
          description="A premium toolkit for brands and products that demand clarity, elegance, and performance."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}