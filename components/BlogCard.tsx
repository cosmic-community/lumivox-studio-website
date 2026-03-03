import Link from "next/link"
import type { BlogPost } from "@/types"

export default function BlogCard({ post }: { post: BlogPost }) {
  const imageUrl = post.metadata?.featured_image?.imgix_url

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="rounded-3xl border border-white/10 bg-canvas overflow-hidden hover:border-iris transition-colors"
    >
      {imageUrl && (
        <img
          src={`${imageUrl}?w=1000&h=600&fit=crop&auto=format,compress`}
          alt={post.title}
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />
      )}
      <div className="p-6">
        <p className="text-pewter text-xs uppercase tracking-widest mb-2">
          {post.metadata?.category || "Insight"}
        </p>
        <h3 className="text-xl font-display mb-2">{post.title}</h3>
        <p className="text-pewter">{post.metadata?.excerpt || ""}</p>
      </div>
    </Link>
  )
}