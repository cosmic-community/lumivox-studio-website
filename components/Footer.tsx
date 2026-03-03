import type { Service, SiteSettings } from "@/types"

export default function Footer({
  settings,
  services
}: {
  settings: SiteSettings | null
  services: Service[]
}) {
  const socialLinks = settings?.metadata?.social_links
  const contactEmail = settings?.metadata?.contact_email || "hello@lumivox.studio"

  return (
    <footer className="bg-obsidian border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-lg mb-4">
            {settings?.metadata?.site_name || "Lumivox Studio"}
          </h3>
          <p className="text-pewter text-sm">
            {settings?.metadata?.tagline || "Premium design for bold teams."}
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-pewter mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>{service.metadata?.title || service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-pewter mb-4">
            Social
          </h4>
          <ul className="space-y-2 text-sm">
            {socialLinks?.instagram && (
              <li>
                <a href={socialLinks.instagram} className="hover:text-iris">
                  Instagram
                </a>
              </li>
            )}
            {socialLinks?.dribbble && (
              <li>
                <a href={socialLinks.dribbble} className="hover:text-iris">
                  Dribbble
                </a>
              </li>
            )}
            {socialLinks?.linkedin && (
              <li>
                <a href={socialLinks.linkedin} className="hover:text-iris">
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-pewter mb-4">
            Contact
          </h4>
          <p className="text-sm">{contactEmail}</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 text-xs text-pewter">
        © {new Date().getFullYear()} Lumivox Studio. All rights reserved.
      </div>
    </footer>
  )
}