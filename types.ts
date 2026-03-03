export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, unknown>
  type: string
  created_at?: string
  modified_at?: string
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit?: number
  skip?: number
}

export type PageTemplateKey = "home" | "standard"
export type PageTemplateValue = "Home" | "Standard"

export interface PageSection {
  type?: "services" | "projects" | "testimonials" | "blog"
  headline?: string
}

// Changed: type is now required (not optional) to properly extend CosmicObject
export interface Page extends CosmicObject {
  type: "pages" // Changed: removed ? to fix TS2430
  metadata: {
    template?: {
      key: PageTemplateKey
      value: PageTemplateValue
    }
    seo_title?: string
    hero_heading?: string
    hero_subheading?: string
    hero_cta?: string
    sections?: PageSection[]
  }
}

// Changed: type is now required (not optional) to properly extend CosmicObject
export interface Service extends CosmicObject {
  type: "services" // Changed: removed ? to fix TS2430
  metadata: {
    title?: string
    icon?: string
    description?: string
    order?: number
  }
}

// Changed: type is now required (not optional) to properly extend CosmicObject
export interface Project extends CosmicObject {
  type: "projects" // Changed: removed ? to fix TS2430
  metadata: {
    title?: string
    category_tags?: string
    description?: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    case_study_content?: string
    client_name?: string
    year?: number
    results_metrics?: Record<string, string>
  }
}

// Changed: type is now required (not optional) to properly extend CosmicObject
export interface Testimonial extends CosmicObject {
  type: "testimonials" // Changed: removed ? to fix TS2430
  metadata: {
    quote?: string
    author_name?: string
    role?: string
    company?: string
    photo?: {
      url: string
      imgix_url: string
    }
  }
}

// Changed: type is now required (not optional) to properly extend CosmicObject
export interface BlogPost extends CosmicObject {
  type: "blog-posts" // Changed: removed ? to fix TS2430
  metadata: {
    title?: string
    excerpt?: string
    content?: string
    featured_image?: {
      url: string
      imgix_url: string
    }
    author?: string
    category?: string
  }
}

// Changed: type is now required (not optional) to properly extend CosmicObject
export interface SiteSettings extends CosmicObject {
  type: "site-settings" // Changed: removed ? to fix TS2430
  metadata: {
    site_name?: string
    tagline?: string
    logo?: {
      url: string
      imgix_url: string
    }
    contact_email?: string
    social_links?: {
      instagram?: string
      dribbble?: string
      linkedin?: string
    }
    color_palette?: {
      obsidian?: string
      iris?: string
      coral?: string
      linen?: string
    }
    typography?: {
      display?: string
      body?: string
      mono?: string
    }
  }
}