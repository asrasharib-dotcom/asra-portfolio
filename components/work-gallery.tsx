import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/lib/projects'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function WorkGallery() {
  return (
    <section id="work" aria-labelledby="work-title" className="relative py-24 md:pb-48 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          id="work-title"
          eyebrow="Selected Work"
          title={
            <>
              Campaigns, content <span className="italic text-blush">& craft</span>
            </>
          }
          description="Selected examples of my social media content, AI-assisted creative work, content strategy, employer branding and paid social experience. Client identities are kept confidential; each card opens a focused case study with relevant portfolio visuals."
        />

        <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <Reveal
              as="li"
              key={project.slug}
              delay={(i % 2) * 120}
              className={cn(i % 2 === 1 && 'md:translate-y-16')}
            >
              <ProjectCard project={project} priority={i < 2} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface">
        <Image
          src={project.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-primary/0 mix-blend-multiply transition-colors duration-700 group-hover:bg-primary/30" />

        <span className="absolute left-6 top-6 font-serif text-lg text-foreground/80">{project.index}</span>
        <span className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-foreground backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:border-blush group-hover:bg-primary">
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </span>

        <ul className="absolute bottom-6 left-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-foreground/90 backdrop-blur"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-blush">{project.category}</p>
          <h3 className="mt-2 font-serif text-3xl text-foreground transition-colors group-hover:text-blush md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </div>
      </div>
      <span className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/80 underline-offset-4 group-hover:underline">
        Read the case study
        <span className="sr-only">: {project.title}</span>
      </span>
    </Link>
  )
}
