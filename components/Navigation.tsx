"use client"

import { useEffect, useState } from "react"
import type { SiteSettings } from "@/types"

export default function Navigation({ settings }: { settings: SiteSettings | null }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const logoUrl = settings?.metadata?.logo?.imgix_url
  const siteName = settings?.metadata?.site_name || "Lumivox Studio"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          {logoUrl && (
            <img
              src={`${logoUrl}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={siteName}
              width={40}
              height={40}
              className="rounded-full border border-white/10"
            />
          )}
          <span className="font-display text-lg">{siteName}</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm text-pewter">
          <a href="#services" className="hover:text-linen transition-colors">
            Services
          </a>
          <a href="#work" className="hover:text-linen transition-colors">
            Work
          </a>
          <a href="#process" className="hover:text-linen transition-colors">
            Process
          </a>
          <a href="#insights" className="hover:text-linen transition-colors">
            Insights
          </a>
          <a href="#contact" className="hover:text-linen transition-colors">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-iris text-white text-sm font-medium hover:bg-coral transition-colors"
        >
          Start a Project
        </a>
      </div>
    </nav>
  )
}