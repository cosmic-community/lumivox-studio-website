export default function SectionHeading({
  eyebrow,
  headline,
  description
}: {
  eyebrow: string
  headline: string
  description: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-pewter text-xs uppercase tracking-[0.4em] mb-4">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-display mb-4">{headline}</h2>
      <p className="text-pewter">{description}</p>
    </div>
  )
}