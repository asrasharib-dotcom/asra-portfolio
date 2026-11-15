
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/lib/projects'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Magnetic } from '@/components/magnetic'
import { cn } from '@/lib/utils'

export function WorkGallery() {
  const selectedProjects = projects.filter((project) =>
    [
      'company-branding',
      'social-media-strategy',
      'social-media-management',
      'ai-video-creation',
    ].includes(project.slug),
  )

  const creatorProject = projects.find(
    (project) => project.slug === 'personal-creator-account',
  )

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative py-24 md:pb-48 md:pt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          id="work-title"
          eyebrow="Selected Work"
          title={
            <>
              Campaigns, content{' '}
              <span className="italic text-blush">& craft</span>
            </>
          }
          description="Selected examples of my social media content, AI-assisted creative work, content strategy, employer branding and paid social experience. Client identities are kept confidential; each card opens a focused case study with relevant portfolio visuals."
        />

        <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
          {selectedProjects.map((project, i) => (
            <Reveal
              as="li"
              key={project.slug}
              delay={(i % 2) * 120}
              className={cn(i % 2 === 1 && 'md:translate-y-16')}
            >
              <ProjectCard project={project} priority={i < 2} />
            </Reveal>
          ))}

          <Reveal
            as="li"
            delay={120}
            className="md:translate-y-16"
          >
            <ResultsCard />
          </Reveal>

          {creatorProject && (
            <Reveal as="li" delay={120}>
              <ProjectCard project={creatorProject} />
            </Reveal>
          )}
        </ul>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  priority,
}: {
  project: Project
  priority?: boolean
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface">
        <Magnetic className="absolute inset-0" strength={0.08}>
          <Image
            src={project.image}
            alt=""
            fill
            priority={priority}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
        </Magnetic>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#263847]/55 via-[#263847]/10 to-transparent" />

        <div className="pointer-events-none absolute inset-0 bg-transparent transition-colors duration-700 group-hover:bg-[#D6E8E7]/25" />

        <Magnetic className="absolute left-6 top-6" strength={0.25}>
          <span className="inline-block font-serif text-lg text-white">
            {project.index}
          </span>
        </Magnetic>

        <Magnetic className="absolute right-6 top-6" strength={0.3}>
          <span className="flex size-11 items-center justify-center rounded-full border border-white/40 bg-[#263847]/70 text-white backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:border-[#527D89] group-hover:bg-[#527D89]">
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </span>
        </Magnetic>

        <ul className="absolute bottom-6 left-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Magnetic strength={0.2}>
                <span className="inline-block rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/90 backdrop-blur">
                  {tag}
                </span>
              </Magnetic>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Magnetic strength={0.18}>
          <p className="inline-block text-xs uppercase tracking-[0.25em] text-blush">
            {project.category}
          </p>
        </Magnetic>

        <Magnetic strength={0.18}>
          <h3 className="mt-2 inline-block font-serif text-3xl text-foreground transition-colors group-hover:text-blush md:text-4xl">
            {project.title}
          </h3>
        </Magnetic>

        <Magnetic strength={0.12}>
          <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </Magnetic>

        <Magnetic className="mt-4 inline-flex" strength={0.25}>
          <span className="inline-flex items-center gap-2 text-sm text-foreground/80 underline-offset-4 group-hover:underline">
            Read the case study
            <span className="sr-only">: {project.title}</span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </Magnetic>
      </div>
    </Link>
  )
}

function ResultsCard() {
  return (
    <Link
      href="/results"
      className="group block rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface">
        <Magnetic className="absolute inset-0" strength={0.08}>
          <Image
            src="/images/results-cover.jpg"
            alt="Social media performance and analytics portfolio"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
        </Magnetic>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#263847]/40 via-transparent to-transparent" />

        <Magnetic className="absolute left-6 top-6" strength={0.25}>
          <span className="inline-block font-serif text-lg text-white">
            05
          </span>
        </Magnetic>

        <Magnetic className="absolute right-6 top-6" strength={0.3}>
          <span className="flex size-11 items-center justify-center rounded-full border border-white/40 bg-[#263847]/70 text-white backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:border-[#527D89] group-hover:bg-[#527D89]">
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </span>
        </Magnetic>
      </div>

      <div className="mt-6">
        <Magnetic strength={0.18}>
          <p className="inline-block text-xs uppercase tracking-[0.25em] text-blush">
            Performance & Analytics
          </p>
        </Magnetic>

        <Magnetic strength={0.18}>
          <h3 className="mt-2 inline-block font-serif text-3xl text-foreground transition-colors group-hover:text-blush md:text-4xl">
            Results & Growth
          </h3>
        </Magnetic>

        <Magnetic strength={0.12}>
          <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Explore social media insights, audience growth, reach, views and
            campaign performance across managed accounts.
          </p>
        </Magnetic>

        <Magnetic className="mt-4 inline-flex" strength={0.25}>
          <span className="inline-flex items-center gap-2 text-sm text-foreground/80 underline-offset-4 group-hover:underline">
            Explore results
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </Magnetic>
      </div>
    </Link>
  )
}
