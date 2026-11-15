
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/site'
import { HeroPortrait } from '@/components/hero-portrait'
import { Magnetic } from '@/components/magnetic'

const specialties = [
  'Social Media Strategy & Management',
  'Content Creation & Creative Campaigns',
  'AI-Powered Video & UGC Creation',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 size-[36rem] rounded-full bg-primary/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 size-[28rem] rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1700px] items-center gap-5 px-4 pb-20 sm:px-6 md:px-8 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-4 lg:pb-28">

        {/* LEFT SIDE */}
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">

          <Magnetic strength={0.12}>
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-blush">
              <span className="h-px w-8 bg-blush/60" />
              {site.role}
            </p>
          </Magnetic>

          <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <Magnetic strength={0.12}>
              <span className="block">Social Media</span>
            </Magnetic>

            <Magnetic strength={0.12}>
              <span className="block italic text-blush">Marketing</span>
            </Magnetic>

            <Magnetic strength={0.12}>
              <span className="block">Manager</span>
            </Magnetic>
          </h1>

          <Magnetic strength={0.12}>
            <p className="mt-6 text-lg text-foreground/90">
              3+ Years of Experience
            </p>
          </Magnetic>

          <Magnetic strength={0.08}>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              I help brands build a strong digital presence through thoughtful
              strategy, creative storytelling, and engaging content.
            </p>
          </Magnetic>

          <div className="mt-8">
            <Magnetic strength={0.18}>
              <Link
                href="/#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-8px_#527D89] transition-all hover:bg-[#344F60]"
              >
                Explore My Work
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* CENTER PORTRAIT */}
        <div className="relative order-first min-w-0 lg:order-none">
          <Magnetic strength={0.035}>
            <HeroPortrait />
          </Magnetic>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 lg:pl-5">

          <Magnetic strength={0.12}>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-blush">
              What I Do
            </p>
          </Magnetic>

          <h2 className="font-serif text-3xl leading-snug text-foreground sm:text-4xl">
            <Magnetic strength={0.12}>
              <span className="block">Creative Ideas.</span>
            </Magnetic>
            <Magnetic strength={0.12}>
              <span className="block italic text-blush">Strategic Impact.</span>
            </Magnetic>
          </h2>

          <Magnetic strength={0.08}>
            <p className="mt-5 max-w-sm leading-relaxed text-muted-foreground">
              I combine social media strategy, digital marketing, creative design,
              video editing, and AI-powered UGC to help brands increase visibility,
              engage the right audience, and turn content into meaningful business growth.
            </p>
          </Magnetic>

          <ul className="mt-7 space-y-4">
            {specialties.map((item, index) => (
              <li key={item}>
                <Magnetic strength={0.12}>
                  <div className="flex items-center gap-3 text-sm text-foreground/85">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/40 text-xs text-blush">
                      0{index + 1}
                    </span>
                    {item}
                  </div>
                </Magnetic>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Magnetic strength={0.18}>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-blush hover:text-blush"
              >
                Let's Connect
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  )
}
