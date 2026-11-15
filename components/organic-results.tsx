import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Magnetic } from '@/components/magnetic'
import { cn } from '@/lib/utils'

type Metric = {
  label: string
  value: string
}

type Result = {
  src: string
  width: number
  height: number
  alt: string
  platform: string
  period: string
  metrics: Metric[]
}

const insights: Result[] = [
  {
    src: '/images/results/ig-views-1-5m.jpg',
    width: 1286,
    height: 816,
    alt: 'Instagram insights showing 1.5 million views',
    platform: 'Account Insights',
    period: 'September',
    metrics: [
      { label: 'Views', value: '1.5M' },
      { label: 'Non-followers', value: '45.5%' },
    ],
  },
  {
    src: '/images/results/ig-dashboard-855k.jpg',
    width: 1334,
    height: 784,
    alt: 'Instagram professional dashboard showing 855K views and 68.3K interactions',
    platform: 'Professional Dashboard',
    period: 'September',
    metrics: [
      { label: 'Views', value: '855K' },
      { label: 'Interactions', value: '68.3K' },
    ],
  },
  {
    src: '/images/results/ig-views-512k.jpg',
    width: 1413,
    height: 752,
    alt: 'Instagram insights showing 512,875 views',
    platform: 'Account Insights',
    period: 'Organic Performance',
    metrics: [
      { label: 'Views', value: '512,875' },
      { label: 'From ads', value: '0%' },
    ],
  },
  {
    src: '/images/results/ig-dashboard-345k.jpg',
    width: 1283,
    height: 816,
    alt: 'Instagram dashboard showing 345K views and 19,781 interactions',
    platform: 'Professional Dashboard',
    period: 'September',
    metrics: [
      { label: 'Views', value: '345K' },
      { label: 'Interactions', value: '19,781' },
    ],
  },
  {
    src: '/images/results/ig-march-reach.jpg',
    width: 1283,
    height: 816,
    alt: 'Instagram insights showing 19,044 accounts reached',
    platform: 'Instagram Insights',
    period: 'March 2025',
    metrics: [
      { label: 'Accounts reached', value: '19,044' },
      { label: 'Non-followers', value: '62%' },
    ],
  },
  {
    src: '/images/results/post-engagement.jpg',
    width: 1170,
    height: 574,
    alt: 'Instagram post engagement insights',
    platform: 'Single Post',
    period: 'Post-level',
    metrics: [
      { label: 'Views', value: '5.5K' },
      { label: 'Shares', value: '74' },
    ],
  },
]

const instagramContent: Result[] = [
  'insta short form reel.jpeg',
  'insta short form reel 2.jpeg',
  'Short-form Video1.jpeg',
  'Short-form Video 2.jpeg',
  'Short-form Video3.jpeg',
  'Short-form Video4.jpeg',
  'Short-form Video 5.jpeg',
].map((file) => ({
  src: `/images/results/${file}`,
  width: 900,
  height: 1200,
  alt: 'Anonymized Instagram short-form content example',
  platform: 'Instagram Content',
  period: 'Short-form Video',
  metrics: [],
}))

const videos: Result[] = [
  {
    src: '/images/results/tiktok-363k.jpg',
    width: 785,
    height: 1600,
    alt: 'TikTok analytics showing 363K video views',
    platform: 'TikTok Studio',
    period: 'Video Analytics',
    metrics: [
      { label: 'Video views', value: '363K' },
      { label: 'Shares', value: '2,531' },
      { label: 'New followers', value: '215' },
    ],
  },
  ...[
    'tiktok 134.6k.jpeg',
    'tiktok 195.7k.jpeg',
    'tiktok 223.2k.jpeg',
  ].map((file) => ({
    src: `/images/results/${file}`,
    width: 785,
    height: 1600,
    alt: 'Anonymized TikTok video analytics screenshot',
    platform: 'TikTok Studio',
    period: 'Video Analytics',
    metrics: [],
  })),
]

const linkedInResults: Result[] = [
  'linkedin-result-86.jpeg',
  'linkedin-result-89.jpeg',
  'linkedin-result-92.jpeg',
  'linkedin-result-97.jpeg',
].map((file) => ({
  src: `/images/results/${file}`,
  width: 1280,
  height: 800,
  alt: 'Anonymized LinkedIn analytics',
  platform: 'LinkedIn Analytics',
  period: 'Organic Reach',
  metrics: [],
}))

const metaAdsResults: Result[] = [
  {
    src: '/images/results/Meta Ads before result 1.jpg',
    width: 1280,
    height: 800,
    alt: 'Meta Ads campaign performance before optimization',
    platform: 'Meta Ads',
    period: 'Before optimization',
    metrics: [],
  },
  {
    src: '/images/results/Meta Ads After result 1.jpg',
    width: 1280,
    height: 800,
    alt: 'Meta Ads campaign performance after optimization',
    platform: 'Meta Ads',
    period: 'After optimization',
    metrics: [],
  },
  {
    src: '/images/results/Meta Ads before result 2.jpg',
    width: 1280,
    height: 800,
    alt: 'Meta Ads campaign performance before optimization',
    platform: 'Meta Ads',
    period: 'Before optimization',
    metrics: [],
  },
  {
    src: '/images/results/Meta Ads after result 2.jpg',
    width: 1280,
    height: 800,
    alt: 'Meta Ads campaign performance after optimization',
    platform: 'Meta Ads',
    period: 'After optimization',
    metrics: [],
  },
]

function DashboardFrame({
  result,
  sizes,
}: {
  result: Result
  sizes: string
}) {
  return (
    <figure className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/40 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-blush/50 hover:shadow-[0_25px_60px_-25px_rgba(82,125,137,0.45)]">
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3.5 transition-colors duration-500 group-hover:border-blush/30">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="size-2 rounded-full bg-primary" />
            <span className="size-2 rounded-full bg-blush/50" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
          </span>

          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {result.platform}
          </span>
        </div>

        <span className="text-[10px] tracking-wide text-blush/80">
          {result.period}
        </span>
      </div>

      <div className="overflow-hidden bg-black p-3 md:p-4">
        <Image
          src={result.src}
          alt={result.alt}
          width={result.width}
          height={result.height}
          sizes={sizes}
          unoptimized
          draggable={false}
          className="h-auto w-full select-none rounded-xl transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      </div>

      {result.metrics.length > 0 && (
        <figcaption className="mt-auto grid grid-cols-2 gap-px border-t border-border bg-border sm:auto-cols-fr sm:grid-flow-col sm:grid-cols-none">
          {result.metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-card px-5 py-4 transition-colors duration-500 group-hover:bg-surface"
            >
              <p className="font-serif text-2xl text-foreground md:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {metric.label}
              </p>
            </div>
          ))}
        </figcaption>
      )}
    </figure>
  )
}

function ResultsSubheading({
  title,
  label,
}: {
  title: string
  label: string
}) {
  return (
    <Reveal>
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-4">
        <Magnetic strength={0.12}>
          <h3 className="font-serif text-3xl text-foreground md:text-4xl">
            {title}
          </h3>
        </Magnetic>

        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </span>
      </div>
    </Reveal>
  )
}

function ResultsGrid({
  items,
  sizes,
}: {
  items: Result[]
  sizes: string
}) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {items.map((result, i) => (
        <Reveal
          as="li"
          key={result.src}
          delay={(i % 2) * 120}
        >
          <Magnetic strength={0.12}>
            <DashboardFrame result={result} sizes={sizes} />
          </Magnetic>
        </Reveal>
      ))}
    </ul>
  )
}

export default function OrganicResults() {
  return (
    <section
      id="results"
      aria-labelledby="results-title"
      className="relative overflow-hidden border-t border-border py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 h-[520px] w-[720px] rounded-full bg-primary/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <SectionHeading
            id="results-title"
            eyebrow="Performance Results"
            title={
              <>
                Results that speak{' '}
                <span className="italic text-blush">for themselves</span>
              </>
            }
            description="Selected performance snapshots from multiple managed accounts and brands, showcasing organic social media growth, content performance and paid campaign results. All examples are presented anonymously."
          />
        </Reveal>

        <div className="space-y-24">
          <div>
            <ResultsSubheading
              title="Meta Ads Results"
              label="Paid Campaigns"
            />

            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <Reveal delay={100}>
                <Magnetic strength={0.1}>
                  <div className="rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-blush/40">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Campaign comparison 01
                    </p>
                    <p className="mt-2 font-serif text-2xl text-foreground">
                      Before <span className="text-blush">/</span> After
                    </p>
                  </div>
                </Magnetic>
              </Reveal>

              <Reveal delay={200}>
                <Magnetic strength={0.1}>
                  <div className="rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-500 hover:-translate-y-1 hover:border-blush/40">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Campaign comparison 02
                    </p>
                    <p className="mt-2 font-serif text-2xl text-foreground">
                      Before <span className="text-blush">/</span> After
                    </p>
                  </div>
                </Magnetic>
              </Reveal>
            </div>

            <ResultsGrid
              items={metaAdsResults}
              sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div>
            <ResultsSubheading
              title="Instagram Insights"
              label="Organic Performance"
            />

            <ResultsGrid
              items={insights}
              sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div>
            <ResultsSubheading
              title="Instagram Short-form Content"
              label="Content Examples"
            />

            <ResultsGrid
              items={instagramContent}
              sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div>
            <ResultsSubheading
              title="LinkedIn Results"
              label="LinkedIn Analytics"
            />

            <ResultsGrid
              items={linkedInResults}
              sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div>
            <ResultsSubheading
              title="TikTok Results"
              label="Video Analytics"
            />

            <ul className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:gap-10">
              {videos.map((result, i) => (
                <Reveal
                  as="li"
                  key={result.src}
                  delay={(i % 2) * 120}
                  className={cn(i === 1 && 'sm:mt-16')}
                >
                  <Magnetic strength={0.12}>
                    <DashboardFrame
                      result={result}
                      sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                    />
                  </Magnetic>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}