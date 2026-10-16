import {
  CalendarRange,
  Clapperboard,
  Compass,
  Megaphone,
  Scissors,
  Sparkles,
  Target,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Social Media Strategy',
    description: 'Audience research, content pillars and platform plans built around your goals.',
    icon: Compass,
  },
  {
    title: 'Content Planning & Management',
    description: 'Monthly calendars, scheduling, publishing and day-to-day account management.',
    icon: CalendarRange,
  },
  {
    title: 'Creative Campaigns',
    description: 'Campaign concepts and creatives for launches, promotions and key moments.',
    icon: Megaphone,
  },
  {
    title: 'Short-Form Video Content',
    description: 'Reels and TikToks with strong hooks, built to be watched to the end.',
    icon: Clapperboard,
  },
  {
    title: 'Video Editing',
    description: 'Clean, well-paced edits with captions, sound and platform-ready formats.',
    icon: Scissors,
  },
  {
    title: 'AI-Powered Video Creation',
    description: 'AI product videos and realistic UGC-style content, produced quickly and flexibly.',
    icon: Sparkles,
  },
  {
    title: 'Meta Ads Management',
    description: 'Campaign setup, audiences, creatives and ongoing optimisation on Facebook & Instagram.',
    icon: Target,
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title={
            <>
              How I can <span className="italic text-blush">help</span>
            </>
          }
          description="Flexible support for brands that want to show up with purpose — from the big-picture strategy to the final edit."
        />

        <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              delay={(i % 4) * 80}
              className="group relative bg-background p-8 transition-colors duration-500 hover:bg-surface"
            >
              <div className="flex size-12 items-center justify-center rounded-full border border-blush/25 text-blush transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-foreground">
                <service.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-8 font-serif text-2xl leading-tight text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </Reveal>
          ))}
          <li className="flex flex-col justify-end bg-primary p-8">
            <p className="font-serif text-2xl leading-tight text-primary-foreground">
              Have something else in mind?
            </p>
            <a
              href="#contact"
              className="mt-4 text-sm text-primary-foreground/90 underline underline-offset-4 hover:text-white"
            >
              {"Let's talk about it"}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
