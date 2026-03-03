import "./globals.css"
import CosmicBadge from "@/components/CosmicBadge"
import { getSiteSettings } from "@/lib/cosmic"
import type { SiteSettings } from "@/types"

export const metadata = {
  title: "Lumivox Studio",
  description: "Premium design for bold teams"
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const settings: SiteSettings | null = await getSiteSettings()
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        {/* Console capture script for dashboard debugging */}
        <script src="/dashboard-console-capture.js" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-linen antialiased">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
        {settings?.metadata?.site_name ? null : null}
      </body>
    </html>
  )
}