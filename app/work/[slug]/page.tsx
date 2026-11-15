import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { getProject, projects } from '@/lib/projects'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { Magnetic } from '@/components/magnetic'
import NoorAtelierStrategy from '@/components/noor-atelier-strategy'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/work/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) return {}

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      images: [project.image],
    },
  }
}

export default async function CaseStudyPage({
  params,
}: PageProps<'/work/[slug]'>) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const next = projects[(currentIndex + 1) % projects.length]

  const isCreatorAccount = slug === 'personal-creator-account'
  const isComingSoon = slug === 'company-branding'

  const showPerformance =
    slug !== 'social-media-management' &&
    Boolean(project.performanceGroups?.length)

  const showGallery =
    Boolean(project.gallery?.length) &&
    ![
      'ai-video-creation',
      'company-branding',
      'social-media-strategy',
    ].includes(slug)

  return (
    <>
      <SiteHeader />

      <main className="pt-28 md:pt-36">
        <article>
          <header className="mx-auto max-w-7xl px-6 md:px-10">
            <Magnetic className="inline-flex" strength={0.15}>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-blush"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                All work
              </Link>
            </Magnetic>

            <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <Magnetic className="inline-flex" strength={0.15}>
                  <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-blush">
                    <span className="font-serif text-base normal-case tracking-normal">
                      {project.index}
                    </span>
                    <span className="h-px w-10 bg-blush/60" />
                    {project.category}
                  </p>
                </Magnetic>

                <Magnetic className="mt-5 inline-block" strength={0.12}>
                  <h1 className="text-balance font-serif text-6xl leading-[0.9] text-foreground md:text-8xl">
                    {project.title}
                  </h1>
                </Magnetic>
              </div>

              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Magnetic strength={0.2}>
                      <span className="inline-block rounded-full border border-border px-4 py-1.5 text-sm text-foreground/80 transition-colors duration-300 hover:border-blush/60 hover:bg-surface">
                        {tag}
                      </span>
                    </Magnetic>
                  </li>
                ))}
              </ul>
            </div>

            <Magnetic className="mt-8 inline-block" strength={0.08}>
              <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
            </Magnetic>
          </header>

          <div className="mx-auto mt-14 max-w-7xl px-6 md:px-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-surface shadow-[0_40px_120px_-40px_#527D89]">
              <Magnetic className="absolute inset-0" strength={0.025}>
                <Image
                  src={project.image}
                  alt={`Visual for the ${project.title} case study`}
                  fill
                  priority
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover transition-transform duration-700"
                />
              </Magnetic>
            </div>
          </div>

          {isComingSoon ? (
            <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
              <Reveal as="section">
                <div className="rounded-3xl border border-border bg-surface px-6 py-20 text-center md:px-12 md:py-28">
                  <p className="text-xs uppercase tracking-[0.3em] text-blush">
                    Portfolio Update
                  </p>

                  <h2 className="mt-5 font-serif text-4xl text-foreground md:text-6xl">
                    Coming Soon
                  </h2>

                  <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    New company branding work, creative campaigns and portfolio
                    examples will be added here soon.
                  </p>
                </div>
              </Reveal>
            </div>
          ) : (
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
                      ...(slug === 'social-media-strategy'
                        ? [['noor-atelier', 'Concept Strategy']]
                        : []),
                      ...(showGallery
                        ? [
                            [
                              'gallery',
                              isCreatorAccount
                                ? 'Content Insights'
                                : 'Social Media Gallery',
                            ],
                          ]
                        : []),
                      ...(showPerformance
                        ? [
                            [
                              'performance',
                              isCreatorAccount
                                ? 'Organic Instagram Performance'
                                : 'Platform Performance',
                            ],
                          ]
                        : []),
                      ...(project.videoGroups?.length
                        ? [['videos', 'AI Video Portfolio']]
                        : []),
                    ].map(([id, label]) => (
                      <li key={id}>
                        <Magnetic className="inline-block" strength={0.12}>
                          <a
                            href={`#${id}`}
                            className="inline-block text-muted-foreground transition-colors hover:text-blush"
                          >
                            {label}
                          </a>
                        </Magnetic>
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
                  <Magnetic className="inline-block" strength={0.06}>
                    <p className="font-serif text-3xl leading-snug text-foreground md:text-4xl">
                      {project.objective}
                    </p>
                  </Magnetic>
                </CaseSection>

                <CaseSection
                  id="responsibilities"
                  title="My Responsibilities"
                >
                  <ul className="space-y-4">
                    {project.responsibilities.map((item) => (
                      <li key={item} className="flex gap-4">
                        <Check
                          className="mt-1 size-5 shrink-0 text-blush"
                          aria-hidden="true"
                        />
                        <Magnetic className="inline-block" strength={0.06}>
                          <span>{item}</span>
                        </Magnetic>
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
                      <li key={item}>
                        <Magnetic strength={0.08}>
                          <div className="rounded-2xl border border-border bg-surface px-5 py-4 text-foreground/90 transition-colors duration-300 hover:border-blush/40">
                            {item}
                          </div>
                        </Magnetic>
                      </li>
                    ))}
                  </ul>
                </CaseSection>

                {slug === 'social-media-strategy' && (
                  <CaseSection
                    id="noor-atelier"
                    title="Content Strategy & Planning"
                  >
                    <NoorAtelierStrategy />
                  </CaseSection>
                )}

                {showGallery && (
                  <CaseSection
                    id="gallery"
                    title={
                      isCreatorAccount
                        ? 'Content Insights'
                        : slug === 'social-media-management'
                          ? 'Social Media Management Portfolio'
                          : 'Selected Creative Work'
                    }
                  >
                    <div className="space-y-8">
                      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {isCreatorAccount
                          ? 'An overview of organic content performance on my personal Instagram account, highlighting audience reach, Reel views, profile visits and engagement insights over the last 90 days.'
                          : 'A selection of social media feeds, brand creatives and content design work across different managed accounts.'}
                      </p>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {project.gallery?.map((item) => (
                          <Magnetic key={item.src} strength={0.04}>
                            <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
                              <div className="relative aspect-[4/5] bg-surface">
                                <Image
                                  src={item.src}
                                  alt={item.alt}
                                  fill
                                  sizes="(min-width: 768px) 40vw, 100vw"
                                  className="object-contain p-2 transition-transform duration-500 hover:scale-[1.02]"
                                />
                              </div>

                              <figcaption className="border-t border-border px-5 py-4 text-sm text-foreground/80">
                                {item.caption}
                              </figcaption>
                            </figure>
                          </Magnetic>
                        ))}
                      </div>
                    </div>
                  </CaseSection>
                )}

                {showPerformance && project.performanceGroups && (
                  <CaseSection
                    id="performance"
                    title={
                      isCreatorAccount
                        ? 'Organic Instagram Performance'
                        : 'Platform Performance'
                    }
                  >
                    <div className="space-y-14">
                      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {isCreatorAccount
                          ? 'Performance snapshots from my independently managed Instagram creator account. These results reflect organic content performance, with no paid promotions. Reach and profile visits are based on the last 90 days.'
                          : 'Selected performance snapshots from multiple managed accounts and brands. Each example is presented anonymously to maintain client confidentiality.'}
                      </p>

                      {project.performanceGroups.map((group) => (
                        <div key={group.title}>
                          <Magnetic
                            className="mb-7 inline-block"
                            strength={0.1}
                          >
                            <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                              {group.title}
                            </h3>
                          </Magnetic>

                          <div
                            className={`grid gap-6 ${
                              isCreatorAccount
                                ? 'grid-cols-1 sm:grid-cols-2'
                                : 'grid-cols-2 md:grid-cols-3'
                            }`}
                          >
                            {group.images.map((item) => (
                              <Magnetic key={item.src} strength={0.03}>
                                <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
                                  <div
                                    className={`relative w-full ${
                                      isCreatorAccount
                                        ? 'aspect-[4/5] bg-white'
                                        : 'aspect-[4/3] bg-black/5'
                                    }`}
                                  >
                                    <Image
                                      src={item.src}
                                      alt={item.alt}
                                      fill
                                      sizes={
                                        isCreatorAccount
                                          ? '(min-width: 768px) 40vw, 100vw'
                                          : '(min-width: 768px) 30vw, 50vw'
                                      }
                                      className="object-contain p-2"
                                    />
                                  </div>

                                  {item.caption && (
                                    <figcaption className="border-t border-border px-4 py-4 text-center text-sm font-medium text-foreground/80">
                                      {item.caption}
                                    </figcaption>
                                  )}
                                </figure>
                              </Magnetic>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CaseSection>
                )}

                {project.videoGroups &&
                  project.videoGroups.length > 0 && (
                    <CaseSection id="videos" title="AI Video Portfolio">
                      <div className="space-y-14">
                        {project.videoGroups.map((group) => (
                          <div key={group.title}>
                            <Magnetic
                              className="mb-7 inline-block"
                              strength={0.1}
                            >
                              <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                                {group.title}
                              </h3>
                            </Magnetic>

                            <div className="grid gap-6 sm:grid-cols-2">
                              {group.videos.map((video) => (
                                <Magnetic
                                  key={video.src}
                                  strength={0.04}
                                >
                                  <figure className="overflow-hidden rounded-2xl border border-border bg-surface">
                                    <video
                                      controls
                                      playsInline
                                      preload="metadata"
                                      className="aspect-[9/16] w-full bg-black object-contain"
                                    >
                                      <source
                                        src={video.src}
                                        type="video/mp4"
                                      />
                                      Your browser does not support video
                                      playback.
                                    </video>
                                  </figure>
                                </Magnetic>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CaseSection>
                  )}
              </div>
            </div>
          )}
        </article>

        {!isCreatorAccount && !isComingSoon && (
          <Link
            href={`/work/${next.slug}`}
            className="group block border-t border-border bg-surface/60 transition-colors hover:bg-[#D6E8E7]"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-16 md:px-10 md:py-24">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-blush">
                  Next case study
                </p>
                <p className="mt-3 font-serif text-4xl text-foreground md:text-6xl">
                  {next.title}
                </p>
              </div>

              <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-blush/30 transition-all group-hover:border-[#527D89] group-hover:bg-[#D6E8E7] md:size-20">
                <ArrowRight
                  className="size-6 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Link>
        )}
      </main>

      <SiteFooter />
    </>
  )
}

function CaseSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Reveal as="section" aria-labelledby={`${id}-title`}>
      <div id={id} className="scroll-mt-28">
        <Magnetic className="mb-6 inline-block" strength={0.12}>
          <h2
            id={`${id}-title`}
            className="text-xs uppercase tracking-[0.3em] text-blush"
          >
            {title}
          </h2>
        </Magnetic>

        <div className="text-pretty text-lg leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </Reveal>
  )
}