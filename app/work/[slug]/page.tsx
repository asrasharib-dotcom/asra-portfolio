import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { getProject, projects } from '@/lib/projects'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/work/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: { images: [project.image] },
  }
}

export default async function CaseStudyPage({ params }: PageProps<'/work/[slug]'>) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <SiteHeader />
      <main className="pt-28 md:pt-36">
        <article>
          <header className="mx-auto max-w-7xl px-6 md:px-10">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-blush"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All work
            </Link>

            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-blush">
                  <span className="font-serif text-base normal-case tracking-normal">{project.index}</span>
                  <span className="h-px w-10 bg-blush/60" />
                  {project.category}
                </p>
                <h1 className="mt-5 text-balance font-serif text-6xl leading-[0.9] text-foreground md:text-8xl">
                  {project.title}
                </h1>
              </div>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/80">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
          </header>

          <div className="mx-auto mt-14 max-w-7xl px-6 md:px-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-surface shadow-[0_40px_120px_-40px_#7b182b]">
              <Image
                src={project.image}
                alt={`Visual for the ${project.title} case study`}
                fill
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-10 lg:grid-cols-[16rem_1fr] lg:gap-24">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <nav aria-label="Case study sections">
                <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm lg:flex-col">
                  {[
                    ['overview', 'Overview'],
                    ['objective', 'Objective'],
                    ['responsibilities', 'My Responsibilities'],
                    ['approach', 'Creative Approach'],
                    ['deliverables', 'Deliverables'],
                    ['gallery', 'Selected Work'],
                    ['results', 'Results'],
                  ].map(([id, label]) => (
                    <li key={id}>
                      <a href={`#${id}`} className="text-muted-foreground transition-colors hover:text-blush">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="space-y-20">
              <CaseSection id="overview" title="Overview">
                <p>{project.overview}</p>
              </CaseSection>

              <CaseSection id="objective" title="Objective">
                <p className="font-serif text-3xl leading-snug text-foreground md:text-4xl">
                  {project.objective}
                </p>
              </CaseSection>

              <CaseSection id="responsibilities" title="My Responsibilities">
                <ul className="space-y-4">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="flex gap-4">
                      <Check className="mt-1 size-5 shrink-0 text-blush" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CaseSection>

              <CaseSection id="approach" title="Creative Approach">
                <p>{project.approach}</p>
              </CaseSection>

              <CaseSection id="deliverables" title="Deliverables">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {project.deliverables.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-border bg-surface px-5 py-4 text-foreground/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </CaseSection>

              {project.gallery && project.gallery.length > 0 && (
                <CaseSection id="gallery" title="Selected Work & Visuals">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {project.gallery.map((item) => (
                      <figure key={item.src} className="overflow-hidden rounded-2xl border border-border bg-surface">
                        <div className="relative aspect-[4/3]">
                          <Image src={item.src} alt={item.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
                        </div>
                        <figcaption className="px-4 py-3 text-sm text-muted-foreground">{item.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </CaseSection>
              )}

              <CaseSection id="results" title="Results">
                {project.results.length > 0 ? (
                  <dl className="grid gap-4 sm:grid-cols-3">
                    {project.results.map((r) => (
                      <div key={r.label} className="rounded-2xl border border-border bg-surface p-6">
                        <dt className="text-sm text-muted-foreground">{r.label}</dt>
                        <dd className="mt-2 font-serif text-4xl text-blush">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="rounded-2xl border border-dashed border-blush/30 bg-primary/10 p-6 text-sm">
                    Verified results for this project will be added here once the performance data has
                    been confirmed.
                  </p>
                )}
              </CaseSection>
            </div>
          </div>
        </article>

        <Link
          href={`/work/${next.slug}`}
          className="group block border-t border-border bg-surface/60 transition-colors hover:bg-primary/20"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-16 md:px-10 md:py-24">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blush">Next case study</p>
              <p className="mt-3 font-serif text-4xl text-foreground md:text-6xl">{next.title}</p>
            </div>
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-blush/30 transition-all group-hover:border-primary group-hover:bg-primary md:size-20">
              <ArrowRight className="size-6 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </main>
      <SiteFooter />
    </>
  )
}

function CaseSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" aria-labelledby={`${id}-title`}>
      <div id={id} className="scroll-mt-28">
        <h2 id={`${id}-title`} className="mb-6 text-xs uppercase tracking-[0.3em] text-blush">
          {title}
        </h2>
        <div className="text-pretty text-lg leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </Reveal>
  )
}
