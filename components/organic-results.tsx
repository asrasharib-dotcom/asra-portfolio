import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Metric = { label: string; value: string }

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
    alt: 'Insights screenshot showing 1,500,000 views for September 1 to September 30, split 54.5% followers and 45.5% non-followers',
    platform: 'Account Insights',
    period: 'Sep 1 – Sep 30',
    metrics: [
      { label: 'Views', value: '1,500,000' },
      { label: 'Non-followers', value: '45.5%' },
    ],
  },
  {
    src: '/images/results/ig-dashboard-855k.jpg',
    width: 1334,
    height: 784,
    alt: 'Insights screenshot for 1 to 30 September showing 855K views, 68.3K interactions, 72.1K total followers and 408 pieces of content shared',
    platform: 'Professional Dashboard',
    period: '1 Sep – 30 Sep',
    metrics: [
      { label: 'Views', value: '855K' },
      { label: 'Interactions', value: '68.3K' },
    ],
  },
  {
    src: '/images/results/ig-views-512k.jpg',
    width: 1413,
    height: 752,
    alt: 'Insights screenshot showing 512,875 views with 0% from ads, split 74.2% followers and 25.8% non-followers',
    platform: 'Account Insights',
    period: '0% from ads',
    metrics: [
      { label: 'Views', value: '512,875' },
      { label: 'From ads', value: '0%' },
    ],
  },
  {
    src: '/images/results/ig-dashboard-345k.jpg',
    width: 1283,
    height: 816,
    alt: 'Professional dashboard insights for 1 to 30 September showing 345K views, 19,781 interactions, 52,904 total followers and 3 pieces of content shared',
    platform: 'Professional Dashboard',
    period: '1 Sep – 30 Sep',
    metrics: [
      { label: 'Views', value: '345K' },
      { label: 'Interactions', value: '19,781' },
    ],
  },
  {
    src: '/images/results/ig-march-reach.jpg',
    width: 1283,
    height: 816,
    alt: 'Instagram insights for March 2025 showing 51,610 views, 62.0% from non-followers, 19,044 accounts reached and Reels as the top content type at 41.2%',
    platform: 'Instagram Insights',
    period: '1 Mar – 31 Mar 2025',
    metrics: [
      { label: 'Accounts reached', value: '19,044' },
      { label: 'Non-followers', value: '62.0%' },
    ],
  },
  {
    src: '/images/results/post-engagement.jpg',
    width: 1170,
    height: 574,
    alt: 'Single post showing 5.5K views, 82 likes, 14 comments, 6 reposts and 74 shares',
    platform: 'Single Post',
    period: 'Post-level',
    metrics: [
      { label: 'Views', value: '5.5K' },
      { label: 'Shares', value: '74' },
    ],
  },
]

const videos: Result[] = [
  {
    src: '/images/results/tiktok-363k.jpg',
    width: 785,
    height: 1600,
    alt: 'TikTok Studio video analytics showing 363K video views, 13K likes, 268 comments, 2,531 shares, 707 saves, 11.0s average watch time and 215 new followers. Video thumbnail blurred for confidentiality.',
    platform: 'TikTok Studio',
    period: 'Posted Nov 24, 2025',
    metrics: [
      { label: 'Video views', value: '363K' },
      { label: 'Shares', value: '2,531' },
      { label: 'New followers', value: '215' },
    ],
  },
  {
    src: '/images/results/tiktok-5k.jpg',
    width: 777,
    height: 1600,
    alt: 'TikTok Studio video analytics showing 5,134 video views, 97 likes, 7.6s average watch time and 28.29% watched the full video. Video thumbnail blurred for confidentiality.',
    platform: 'TikTok Studio',
    period: 'Posted Aug 11, 2026',
    metrics: [
      { label: 'Video views', value: '5.1K' },
      { label: 'Watched full video', value: '28.29%' },
      { label: 'Avg. watch time', value: '7.6s' },
    ],
  },
]

const metricTypes = ['Views', 'Accounts Reached', 'Interactions', 'Follower Growth']

function DashboardFrame({ result, sizes }: { result: Result; sizes: string }) {
  return (
    <figure className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/40 transition-colors duration-500 hover:border-blush/30">
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="size-2 rounded-full bg-primary" />
            <span className="size-2 rounded-full bg-blush/50" />
            <span className="size-2 rounded-full bg-muted-foreground/30" />
          </span>
          <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            {result.platform}
          </span>
        </div>
        <span className="text-[11px] tracking-wide text-blush/80">{result.period}</span>
      </div>

      <div className="bg-black p-3 md:p-4">
        <Image
          src={result.src}
          alt={result.alt}
          width={result.width}
          height={result.height}
          sizes={sizes}
          draggable={false}
          className="h-auto w-full select-none rounded-xl"
        />
      </div>

      <figcaption className="mt-auto grid grid-cols-2 gap-px border-t border-border bg-border sm:auto-cols-fr sm:grid-flow-col sm:grid-cols-none">
        {result.metrics.map((metric) => (
          <div key={metric.label} className="bg-card px-5 py-4">
            <p className="font-serif text-2xl text-foreground md:text-3xl">{metric.value}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {metric.label}
            </p>
          </div>
        ))}
      </figcaption>
    </figure>
  )
}

export function OrganicResults() {
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
        <SectionHeading
          id="results-title"
          eyebrow="Organic Marketing Results"
          title={
            <>
              Reach that was <span className="italic text-blush">earned</span>, not bought
            </>
          }
          description="Native insights from accounts I've managed — organic performance only, with no paid promotion. Every figure below is taken directly from the screenshot it sits under. Client names, handles and creatives are hidden for confidentiality."
        />

        <Reveal className="mb-14 flex flex-wrap gap-3 md:mb-20">
          {metricTypes.map((type) => (
            <span
              key={type}
              className="rounded-full border border-blush/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-blush"
            >
              {type}
            </span>
          ))}
        </Reveal>

        <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-border pb-4">
          <h3 className="font-serif text-3xl text-foreground md:text-4xl">Account Insights</h3>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Instagram &amp; Facebook
          </span>
        </div>

        <ul className="mb-24 grid gap-6 md:grid-cols-2 lg:gap-8">
          {insights.map((result, i) => (
            <Reveal as="li" key={result.src} delay={(i % 2) * 120}>
              <DashboardFrame result={result} sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw" />
            </Reveal>
          ))}
        </ul>

        <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-border pb-4">
          <h3 className="font-serif text-3xl text-foreground md:text-4xl">Short-form Video</h3>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">TikTok</span>
        </div>

        <ul className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:gap-10">
          {videos.map((result, i) => (
            <Reveal as="li" key={result.src} delay={i * 120} className={cn(i === 1 && 'sm:mt-16')}>
              <DashboardFrame result={result} sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
