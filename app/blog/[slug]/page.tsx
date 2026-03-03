// app/blog/[slug]/page.tsx
import { marked } from "marked"
import { getBlogPostBySlug } from "@/lib/cosmic"
import type { BlogPost } from "@/types"

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post: BlogPost | null = await getBlogPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-obsidian text-linen flex items-center justify-center">
        <p>Post not found.</p>
      </div>
    )
  }

  const contentHtml = post.metadata?.content
    ? marked.parse(post.metadata.content)
    : ""

  return (
    <div className="min-h-screen bg-obsidian text-linen px-6 py-20">
      <div className="max-w-3xl mx-auto space-y-10">
        <header>
          <p className="text-pewter uppercase tracking-widest text-xs mb-2">
            {post.metadata?.category || "Insight"}
          </p>
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            {post.title}
          </h1>
          <p className="text-pewter text-lg">
            {post.metadata?.excerpt || "Lumivox Studio insight."}
          </p>
          <p className="text-pewter text-sm mt-4">
            By {post.metadata?.author || "Lumivox Studio"}
          </p>
        </header>

        {post.metadata?.featured_image && (
          <img
            src={`${post.metadata.featured_image.imgix_url}?w=1400&h=800&fit=crop&auto=format,compress`}
            alt={post.title}
            width={1000}
            height={560}
            className="rounded-3xl border border-white/10"
          />
        )}

        <article
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  )
}