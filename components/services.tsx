
import {
  CalendarRange,
  Compass,
  Scissors,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Magnetic } from '@/components/magnetic'

const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Social Media Management',
    description:
      'End-to-end social media management, including content calendars, scheduling, publishing and community engagement.',
    icon: CalendarRange,
  },
  {
    title: 'Paid Social Advertising',
    description:
      'Strategic Meta Ads campaigns, audience targeting, creative testing and performance optimization.',
    icon: Target,
  },
  {
    title: 'AI Video & UGC Creation',
    description:
      'AI-generated videos and realistic UGC-style creatives designed for social media campaigns.',
    icon: Sparkles,
  },
  {
    title: 'Content Strategy & Creation',
    description:
      'Content pillars, creative concepts, platform-specific content and strategic monthly calendars.',
    icon: Compass,
  },
  {
    title: 'Influencer Marketing',
    description:
      'Influencer research, creator collaborations and campaign planning to connect brands with relevant audiences.',
    icon: Users,
  },
  {
    title: 'Video Editing',
    description:
      'Polished Reels and short-form videos with engaging pacing, captions and platform-ready formats.',
    icon: Scissors,
  },
]

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title={
            <>
              How I can <span className="italic text-blush">help</span>
            </>
          }
          description="Creative and strategic social media support to help brands build their presence, create meaningful content and reach their goals."
        />

        <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={(i % 3) * 80}
              className="group relative bg-background p-8 transition-colors duration-500 hover:bg-surface md:p-10"
            >
              <Magnetic strength={0.16}>
                <div className="flex size-12 items-center justify-center rounded-full border border-blush/25 text-blush transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-foreground">
                  <service.icon className="size-5" aria-hidden="true" />
                </div>
              </Magnetic>

              <Magnetic strength={0.12}>
                <h3 className="mt-8 font-serif text-2xl leading-tight text-foreground">
                  {service.title}
                </h3>
              </Magnetic>

              <Magnetic strength={0.07}>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Magnetic>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
