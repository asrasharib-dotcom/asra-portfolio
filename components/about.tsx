
import { Reveal } from '@/components/reveal'
import { Magnetic } from '@/components/magnetic'

const skills = [
  'Social Media Management',
  'Content Strategy',
  'Content Calendars',
  'AI Video Creation',
  'AI UGC-Style Content',
  'Video Editing',
  'Graphic Design',
  'Campaign Planning',
  'Organic Social Media Growth',
  'Meta Ads',
  'Analytics',
  'Brand Development',
]

const facts = [
  { label: 'Experience', value: '3+ years in social media & content' },
  { label: 'Focus', value: 'Strategy, content creation & AI video' },
  { label: 'Platforms', value: 'Instagram · Facebook · LinkedIn · TikTok' },
]

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative border-y border-border bg-surface/60 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-24">

        {/* LEFT SIDE */}
        <Reveal>
          <Magnetic strength={0.12}>
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-blush">
              <span className="h-px w-10 bg-blush/60" />
              About Me
            </p>
          </Magnetic>

          <Magnetic strength={0.10}>
            <h2
              id="about-title"
              className="text-balance font-serif text-5xl leading-[0.95] text-foreground md:text-6xl"
            >
              Where creative execution meets{' '}
              <span className="italic text-blush">strategic thinking</span>
            </h2>
          </Magnetic>

          <dl className="mt-12 divide-y divide-border border-y border-border">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[7rem_1fr] gap-4 py-4 text-sm"
              >
                <Magnetic strength={0.10}>
                  <dt className="uppercase tracking-[0.2em] text-muted-foreground">
                    {fact.label}
                  </dt>
                </Magnetic>

                <Magnetic strength={0.10}>
                  <dd className="text-foreground">{fact.value}</dd>
                </Magnetic>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* RIGHT SIDE */}
        <div>
          <Reveal delay={120} className="space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            <Magnetic strength={0.07}>
              <p>
                {"I'm Asra, a creative marketing professional with "}
                <span className="text-foreground">3+ years of experience</span> in social media
                management and content strategy.
              </p>
            </Magnetic>

            <Magnetic strength={0.07}>
              <p>
                I bring together the two sides of great social media: the{' '}
                <span className="text-foreground">creative</span> — ideas, visuals, videos and copy that
                people actually stop for — and the <span className="text-foreground">strategic</span> —
                research, planning, calendars and performance analysis that make sure every piece of
                content has a purpose.
              </p>
            </Magnetic>

            <Magnetic strength={0.07}>
              <p>
                From educational brands and e-commerce campaigns to employer branding and Meta Ads, I
                help brands show up consistently, tell their story clearly and grow with intention. I
                also use AI tools to create product videos and UGC-style content that feels native to
                each platform.
              </p>
            </Magnetic>
          </Reveal>

          <Reveal delay={200} className="mt-14">
            <Magnetic strength={0.12}>
              <h3 className="mb-6 text-xs uppercase tracking-[0.3em] text-blush">
                Skills
              </h3>
            </Magnetic>

            <ul className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <li key={skill}>
                  <Magnetic strength={0.14}>
                    <span className="inline-block rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-blush/50 hover:text-blush">
                      {skill}
                    </span>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
