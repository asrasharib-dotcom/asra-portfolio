import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    title: 'Research',
    description: 'Understanding the brand, audience, competitors and what is already working.',
  },
  {
    title: 'Strategy',
    description: 'Setting goals, content pillars and a platform-specific plan to reach them.',
  },
  {
    title: 'Creative Development',
    description: 'Turning the plan into concepts, visuals, videos and copy with a clear voice.',
  },
  {
    title: 'Publishing',
    description: 'Scheduling and posting at the right time, and engaging with the community.',
  },
  {
    title: 'Performance Analysis',
    description: 'Reviewing the numbers to learn what landed — and feeding it into what comes next.',
  },
]

export function Process() {
  return (
    <section
      aria-labelledby="process-title"
      className="relative overflow-hidden border-y border-border bg-surface/60 py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          id="process-title"
          eyebrow="My Process"
          title={
            <>
              From research to <span className="italic text-blush">results</span>
            </>
          }
          description="A simple, repeatable process that keeps every piece of content connected to a goal."
        />

        <ol className="grid gap-10 md:grid-cols-5 md:gap-6">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 100} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-blush/30 bg-background font-serif text-lg text-blush">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="hidden h-px flex-1 bg-gradient-to-r from-blush/40 to-transparent md:block" />
                )}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
