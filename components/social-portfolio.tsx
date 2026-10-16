import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const feeds = [
  {
    src: '/images/social/feed-01.jpg',
    alt: 'Instagram feed grid in a phone mockup with bold red and navy educational posts',
    caption: 'Feed Planning',
    detail: 'Education',
  },
  {
    src: '/images/social/feed-02.jpg',
    alt: 'Instagram feed grid in a phone mockup with vivid blue posts and bold yellow headlines',
    caption: 'Content Design',
    detail: 'Digital Services',
  },
  {
    src: '/images/social/feed-03.jpg',
    alt: 'Instagram feed grid in a phone mockup with indigo and white eCommerce posts and story highlights',
    caption: 'Visual Consistency',
    detail: 'eCommerce',
  },
  {
    src: '/images/social/feed-04.jpg',
    alt: 'Instagram feed grid in a phone mockup with deep blue editorial publishing posts',
    caption: 'Page Management',
    detail: 'Publishing',
  },
]

const pillars = ['Feed Planning', 'Content Design', 'Visual Consistency', 'Page Management']

export function SocialPortfolio() {
  return (
    <section
      id="social"
      aria-labelledby="social-title"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          id="social-title"
          eyebrow="Social Media Management"
          title={
            <>
              Feeds that feel <span className="italic text-blush">intentional</span>
            </>
          }
          description="A selection of Instagram feeds I've planned, designed and managed — showing how I build visual consistency, cohesive content design and a recognisable presence, post after post. Client identities are kept confidential."
        />

        <Reveal className="mb-14 flex flex-wrap gap-3 md:mb-20">
          {pillars.map((pillar) => (
            <span
              key={pillar}
              className="rounded-full border border-blush/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-blush"
            >
              {pillar}
            </span>
          ))}
        </Reveal>

        <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:gap-x-12">
          {feeds.map((feed, i) => (
            <Reveal
              as="li"
              key={feed.src}
              delay={(i % 2) * 120}
              className={cn(i % 2 === 1 && 'sm:mt-24')}
            >
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/40 transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:border-blush/40 group-hover:shadow-primary/20">
                  <Image
                    src={feed.src}
                    alt={feed.alt}
                    fill
                    sizes="(min-width: 1280px) 600px, (min-width: 640px) 50vw, 100vw"
                    className="select-none object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    draggable={false}
                  />
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
                  <span className="font-serif text-2xl text-foreground md:text-3xl">{feed.caption}</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {feed.detail}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
