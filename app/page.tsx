import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import LogoStrip from "@/components/LogoStrip"
import ServicesGrid from "@/components/ServicesGrid"
import ProjectsShowcase from "@/components/ProjectsShowcase"
import ProcessSection from "@/components/ProcessSection"
import TestimonialHighlight from "@/components/TestimonialHighlight"
import StatsCounters from "@/components/StatsCounters"
import CTASection from "@/components/CTASection"
import BlogPreview from "@/components/BlogPreview"
import Footer from "@/components/Footer"
import {
  getBlogPosts,
  getHomePage,
  getProjects,
  getServices,
  getSiteSettings,
  getTestimonials
} from "@/lib/cosmic"
import type {
  BlogPost,
  Page,
  Project,
  Service,
  SiteSettings,
  Testimonial
} from "@/types"

export default async function HomePage() {
  const [
    settings,
    homePage,
    services,
    projects,
    testimonials,
    blogPosts
  ]: [
    SiteSettings | null,
    Page | null,
    Service[],
    Project[],
    Testimonial[],
    BlogPost[]
  ] = await Promise.all([
    getSiteSettings(),
    getHomePage(),
    getServices(),
    getProjects(),
    getTestimonials(),
    getBlogPosts()
  ])

  const sortedServices = [...services].sort((a, b) => {
    const orderA = a.metadata?.order ?? 0
    const orderB = b.metadata?.order ?? 0
    return orderA - orderB
  })

  const sortedProjects = [...projects].sort((a, b) => {
    const yearA = a.metadata?.year ?? 0
    const yearB = b.metadata?.year ?? 0
    return yearB - yearA
  })

  const heroHeading =
    homePage?.metadata?.hero_heading ||
    "We design digital experiences that speak before they're read"

  return (
    <main>
      <Navigation settings={settings} />
      <Hero
        heading={heroHeading}
        subheading={
          homePage?.metadata?.hero_subheading ||
          "Elevated systems for brands, products, and experiences that move people."
        }
        ctaText={homePage?.metadata?.hero_cta || "Start a Project"}
      />
      <LogoStrip />
      <ServicesGrid
        services={sortedServices}
        headline="Studio Services"
      />
      <ProjectsShowcase
        projects={sortedProjects}
        headline="Selected Work"
      />
      <ProcessSection headline="The Lumivox Process" />
      <TestimonialHighlight
        testimonial={testimonials[0]}
        headline="Client Love"
      />
      <StatsCounters />
      <BlogPreview posts={blogPosts} headline="Insights" />
      <CTASection
        headline="Ready to build something luminous?"
        ctaText={homePage?.metadata?.hero_cta || "Start a Project"}
      />
      <Footer settings={settings} services={sortedServices} />
    </main>
  )
}