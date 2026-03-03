import { createBucketClient } from "@cosmicjs/sdk"
import type {
  BlogPost,
  CosmicResponse,
  Page,
  Project,
  Service,
  SiteSettings,
  Testimonial
} from "@/types"

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === "object" && error !== null && "status" in error
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: "site-settings" })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)

    return response.object as SiteSettings
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error("Failed to fetch site settings")
  }
}

export async function getHomePage(): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: "pages", slug: "home" })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)

    return response.object as Page
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error("Failed to fetch home page")
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const response: CosmicResponse<Service> = await cosmic.objects
      .find({ type: "services" })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)

    return response.objects as Service[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error("Failed to fetch services")
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response: CosmicResponse<Project> = await cosmic.objects
      .find({ type: "projects" })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)

    return response.objects as Project[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error("Failed to fetch projects")
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response: CosmicResponse<Testimonial> = await cosmic.objects
      .find({ type: "testimonials" })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)

    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error("Failed to fetch testimonials")
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response: CosmicResponse<BlogPost> = await cosmic.objects
      .find({ type: "blog-posts" })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)

    return response.objects as BlogPost[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error("Failed to fetch blog posts")
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: "projects", slug })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)

    return response.object as Project
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error("Failed to fetch project")
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: "blog-posts", slug })
      .props(["id", "title", "slug", "metadata"])
      .depth(1)

    return response.object as BlogPost
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error("Failed to fetch blog post")
  }
}