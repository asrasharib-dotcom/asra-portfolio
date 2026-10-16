import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 grid gap-6 md:mb-20 md:grid-cols-[1fr_1fr] md:items-end">
      <div>
        <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-blush">
          <span className="h-px w-10 bg-blush/60" />
          {eyebrow}
        </p>
        <h2 id={id} className="text-balance font-serif text-5xl leading-[0.95] text-foreground md:text-6xl lg:text-7xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground md:justify-self-end">
          {description}
        </p>
      )}
    </Reveal>
  )
}
