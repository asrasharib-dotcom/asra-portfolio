import Image from 'next/image'
import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, ImageIcon } from 'lucide-react'
import { site } from '@/lib/site'

const specialties = ['Social Media Strategy', 'Content Creation', 'AI-Powered Videos']

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

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 md:px-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:pb-28">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-blush">
            <span className="h-px w-10 bg-blush/60" />
            {site.role}
          </p>

          <h1 className="font-serif text-6xl leading-[0.9] tracking-tight text-foreground sm:text-7xl lg:text-8xl xl:text-[8.5rem]">
            ASRA
            <br />
            <span className="italic text-blush">SHARIB</span>
          </h1>

          <p className="mt-8 font-serif text-3xl text-foreground/90 md:text-4xl">
            Creative Ideas. <span className="italic text-blush">Strategic Impact.</span>
          </p>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            I create strategic social media content, brand campaigns, and AI-powered videos that help brands
            communicate and connect with their audiences.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-foreground/80">
            {specialties.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-blush">·</span>}
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-8px_#7b182b] transition-all hover:bg-[#8f1e33] hover:shadow-[0_0_60px_-6px_#7b182b]"
            >
              Explore My Work
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-blush hover:text-blush"
            >
              {"Let's Connect"}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-in fade-in zoom-in-95 duration-1000 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] border border-blush/15"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-[#3a0f1a] via-surface to-[#0d0507] shadow-[0_40px_120px_-30px_#7b182b]">
            {site.portrait ? (
              <Image
                src={site.portrait}
                alt="Portrait of Asra Sharib, Social Media Manager and Content Strategist"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-[50%_20%]"
              />
            ) : (
              <PortraitPlaceholder />
            )}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"
            />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
              <div>
                <p className="font-serif text-2xl text-foreground">Asra Sharib</p>
                <p className="text-xs uppercase tracking-[0.2em] text-blush">{site.experience} experience</p>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-foreground/90 backdrop-blur">
                <span className="size-1.5 animate-pulse rounded-full bg-blush" />
                Open to projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PortraitPlaceholder() {
  return (
    <div className="grain absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
      <div className="flex size-16 items-center justify-center rounded-full border border-blush/30 text-blush">
        <ImageIcon className="size-6" aria-hidden="true" />
      </div>
      <p className="font-serif text-2xl text-foreground/90">Your portrait here</p>
      <p className="max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
        Add your photo to <code className="text-blush">/public/images</code> and set{' '}
        <code className="text-blush">portrait</code> in <code className="text-blush">lib/site.ts</code>
      </p>
    </div>
  )
}
