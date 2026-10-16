import { ArrowUpRight, AtSign, Briefcase as Linkedin, Camera as Instagram } from 'lucide-react'
import { site } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'

const channels = [
  { label: 'Email', value: site.contact.email, href: `mailto:${site.contact.email}`, icon: AtSign },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: site.contact.linkedin, icon: Linkedin },
  { label: 'Instagram', value: 'Follow on Instagram', href: site.contact.instagram, icon: Instagram },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[160px]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-blush">
            <span className="h-px w-10 bg-blush/60" />
            Contact
          </p>
          <h2
            id="contact-title"
            className="text-balance font-serif text-5xl leading-[0.95] text-foreground md:text-6xl lg:text-7xl"
          >
            {"Let's create something "}
            <span className="italic text-blush">worth sharing</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Have a brand, a campaign or a half-formed idea? Tell me about it — I&apos;d love to hear
            what you&apos;re working on.
          </p>

          <ul className="mt-12 divide-y divide-border border-y border-border">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.label === 'Email' ? undefined : '_blank'}
                  rel={channel.label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex size-10 items-center justify-center rounded-full border border-border text-blush transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-foreground">
                      <channel.icon className="size-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {channel.label}
                      </span>
                      <span className="block text-foreground transition-colors group-hover:text-blush">
                        {channel.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blush"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
