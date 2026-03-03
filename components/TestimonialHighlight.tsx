import type { Testimonial } from "@/types"
import SectionHeading from "@/components/SectionHeading"

export default function TestimonialHighlight({
  testimonial,
  headline
}: {
  testimonial?: Testimonial
  headline: string
}) {
  if (!testimonial) {
    return null
  }

  return (
    <section id="testimonials" className="py-20 bg-obsidian">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Testimonials"
          headline={headline}
          description="Clients trust Lumivox to elevate their premium perception."
        />
        <div className="mt-10 rounded-3xl border border-white/10 bg-canvas p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center">
          {testimonial.metadata?.photo && (
            <img
              src={`${testimonial.metadata.photo.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
              alt={testimonial.metadata?.author_name || "Client"}
              width={150}
              height={150}
              className="w-28 h-28 rounded-full border border-white/10"
            />
          )}
          <div>
            <p className="text-2xl md:text-3xl font-display leading-relaxed">
              “{testimonial.metadata?.quote || "Lumivox delivered beyond expectations."}”
            </p>
            <p className="text-pewter mt-6">
              {testimonial.metadata?.author_name || "Client"} ·{" "}
              {testimonial.metadata?.role || "Leader"}, {testimonial.metadata?.company || "Company"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}