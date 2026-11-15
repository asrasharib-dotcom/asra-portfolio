
import Image from 'next/image'
import {
  ArrowUpRight,
  AtSign,
  Briefcase as Linkedin,
  Camera as Instagram,
} from 'lucide-react'
import { site } from '@/lib/site'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { Magnetic } from '@/components/magnetic'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <Magnetic strength={0.07}>
            <h2
              id="contact-title"
              className="mb-12 max-w-5xl text-balance font-serif text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl"
            >
              Give me your brand, and I'll turn it into content that captures
              attention, builds connections, and drives growth.
            </h2>
          </Magnetic>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col gap-8 pt-2">
              <Magnetic strength={0.12}>
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/hero/front.png"
                    alt="Asra Sharib"
                    width={76}
                    height={76}
                    className="size-[76px] rounded-full border-2 border-blush/50 object-cover"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Asra Sharib
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Social Media Manager & Content Strategist
                    </p>
                  </div>
                </div>
              </Magnetic>

              <div className="border-t border-border" />

              <div className="flex flex-col gap-4">
                <Magnetic strength={0.08}>
                  <p className="text-lg font-medium text-foreground">
                    Have a project in mind? Drop me an email.
                  </p>
                </Magnetic>

                <Magnetic strength={0.1}>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="break-all font-serif text-xl font-semibold text-foreground transition-colors hover:text-blush md:text-2xl"
                  >
                    {site.contact.email}
                  </a>
                </Magnetic>

                <div className="flex flex-wrap gap-3">
                  <Magnetic strength={0.16}>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-blush hover:bg-primary/15"
                    >
                      <AtSign className="size-4 text-blush" />
                      Email
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Magnetic>

                  <Magnetic strength={0.16}>
                    <a
                      href={site.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-blush hover:bg-primary/15"
                    >
                      <Linkedin className="size-4 text-blush" />
                      LinkedIn
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Magnetic>

                  <Magnetic strength={0.16}>
                    <a
                      href={site.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-blush hover:bg-primary/15"
                    >
                      <Instagram className="size-4 text-blush" />
                      Instagram
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
