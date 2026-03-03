"use client"

import { useEffect, useState } from "react"

const stats = [
  { label: "Years", value: 12, suffix: "+" },
  { label: "Projects", value: 200, suffix: "+" },
  { label: "Retention", value: 98, suffix: "%" },
  { label: "Rating", value: 4.9, suffix: "" }
]

export default function StatsCounters() {
  const [currentValues, setCurrentValues] = useState<number[]>(
    stats.map(() => 0)
  )

  useEffect(() => {
    const start = performance.now()
    const duration = 1200

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      const updated = stats.map((stat) => stat.value * progress)
      setCurrentValues(updated)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [])

  return (
    <section className="py-20 bg-obsidian border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          // Changed: Added fallback to handle noUncheckedIndexedAccess (TS2345 & TS2532)
          const currentValue = currentValues[index] ?? 0
          return (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-display text-linen">
                {stat.value % 1 === 0
                  ? Math.round(currentValue)
                  : currentValue.toFixed(1)}
                {stat.suffix}
              </p>
              <p className="text-pewter text-sm mt-2">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}