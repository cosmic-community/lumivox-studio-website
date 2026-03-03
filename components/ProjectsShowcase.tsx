import type { Project } from "@/types"
import SectionHeading from "@/components/SectionHeading"
import ProjectCard from "@/components/ProjectCard"

export default function ProjectsShowcase({
  projects,
  headline
}: {
  projects: Project[]
  headline: string
}) {
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section id="work" className="py-20 bg-obsidian">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Selected Work"
          headline={headline}
          description="Signature projects that balance premium aesthetics with measurable outcomes."
        />
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}