import type { BlogPost } from "@/types"
import SectionHeading from "@/components/SectionHeading"
import BlogCard from "@/components/BlogCard"

export default function BlogPreview({
  posts,
  headline
}: {
  posts: BlogPost[]
  headline: string
}) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section id="insights" className="py-20 bg-obsidian">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Insights"
          headline={headline}
          description="Thoughts on premium brand perception, product design, and digital systems."
        />
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}