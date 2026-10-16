const items = [
  'Social Media Strategy',
  'Content Creation',
  'AI-Powered Videos',
  'UGC-Style Content',
  'Content Calendars',
  'Meta Ads',
  'Employer Branding',
  'Video Editing',
]

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-6" aria-hidden="true">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 px-4 font-serif text-2xl text-foreground/80 md:text-3xl">
            <span className={i % 2 ? 'italic text-blush' : ''}>{item}</span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
