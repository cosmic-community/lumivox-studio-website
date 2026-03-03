import type { Service } from "@/types"

export default function ServiceCard({
  service,
  featured
}: {
  service: Service
  featured?: boolean
}) {
  const icon = service.metadata?.icon || "✨"
  const title = service.metadata?.title || service.title
  const description = service.metadata?.description || ""

  return (
    <div
      className={`rounded-3xl p-8 border border-white/10 bg-canvas ${
        featured ? "md:col-span-2 shadow-glow" : ""
      }`}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-display mb-3">{title}</h3>
      <p className="text-pewter">{description}</p>
    </div>
  )
}