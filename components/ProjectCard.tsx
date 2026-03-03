import Link from "next/link"
import type { Project } from "@/types"

export default function ProjectCard({ project }: { project: Project }) {
  const imageUrl = project.metadata?.featured_image?.imgix_url
  const tags = project.metadata?.category_tags?.split(",") || []

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group rounded-3xl overflow-hidden border border-white/10 bg-canvas hover:border-iris transition-colors"
    >
      <div className="relative">
        {imageUrl && (
          <img
            src={`${imageUrl}?w=1200&h=800&fit=crop&auto=format,compress`}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-display">{project.title}</h3>
        <p className="text-pewter">{project.metadata?.description || ""}</p>
        <div className="flex flex-wrap gap-2 text-xs text-pewter uppercase tracking-widest">
          {tags.map((tag) => (
            <span key={tag.trim()}>{tag.trim()}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}