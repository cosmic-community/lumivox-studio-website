// app/projects/[slug]/page.tsx
import { marked } from "marked"
import { getProjectBySlug } from "@/lib/cosmic"
import type { Project } from "@/types"

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project: Project | null = await getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-obsidian text-linen flex items-center justify-center">
        <p>Project not found.</p>
      </div>
    )
  }

  const contentHtml = project.metadata?.case_study_content
    ? marked.parse(project.metadata.case_study_content)
    : ""

  return (
    <div className="min-h-screen bg-obsidian text-linen px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <p className="text-pewter uppercase tracking-widest text-xs mb-2">
            {project.metadata?.category_tags || "Project"}
          </p>
          <h1 className="text-4xl md:text-5xl font-display mb-4">
            {project.title}
          </h1>
          <p className="text-pewter text-lg">
            {project.metadata?.description || "Project overview"}
          </p>
        </div>

        {project.metadata?.featured_image && (
          <img
            src={`${project.metadata.featured_image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={project.title}
            width={1200}
            height={675}
            className="rounded-3xl border border-white/10"
          />
        )}

        <article
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="grid md:grid-cols-2 gap-6 bg-canvas border border-white/10 rounded-2xl p-6">
          <div>
            <p className="text-pewter text-sm">Client</p>
            <p className="text-linen text-lg">
              {project.metadata?.client_name || "Lumivox Studio"}
            </p>
          </div>
          <div>
            <p className="text-pewter text-sm">Year</p>
            <p className="text-linen text-lg">
              {project.metadata?.year ?? "—"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}