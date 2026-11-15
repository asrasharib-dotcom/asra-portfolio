
'use client'

import { useState } from 'react'

type Platform = 'Instagram' | 'TikTok' | 'Pinterest' | 'Facebook' | 'WhatsApp'

type CalendarItem = {
  day: number
  platform: Platform
  pillar: string
  format: string
  title: string
  hook: string
  goal: string
}

const platforms: Array<'All' | Platform> = [
  'All',
  'Instagram',
  'TikTok',
  'Pinterest',
  'Facebook',
  'WhatsApp',
]

const pillars = [
  { name: 'Craft & Process', share: '30%', color: '#B88D91', description: 'Show the making, materials and details behind each piece.' },
  { name: 'Styling & Wearing', share: '30%', color: '#8D9FA7', description: 'Help the audience style jewellery for everyday and special looks.' },
  { name: 'Gifting & Occasions', share: '25%', color: '#B49A73', description: 'Connect jewellery with celebrations, weddings and thoughtful gifts.' },
  { name: 'Community & Proof', share: '15%', color: '#82978C', description: 'Build trust through customer stories, questions and social proof.' },
]

const calendar: CalendarItem[] = [
  { day: 1, platform: 'Instagram', pillar: 'Craft & Process', format: 'Reel', title: 'From wax to ring', hook: 'Every piece starts with a little detail.', goal: 'Show craftsmanship and attract discovery.' },
  { day: 2, platform: 'Instagram', pillar: 'Community & Proof', format: 'Story poll', title: 'Choose your favourite', hook: 'Gold or silver? Which one feels more you?', goal: 'Encourage replies and audience interaction.' },
  { day: 3, platform: 'Pinterest', pillar: 'Styling & Wearing', format: 'Pin', title: 'Minimal jewellery inspiration', hook: 'Simple pieces, effortless styling.', goal: 'Reach people searching for styling inspiration.' },
  { day: 4, platform: 'Instagram', pillar: 'Gifting & Occasions', format: 'Carousel', title: 'Thoughtful jewellery gifts', hook: 'A little something they will keep close.', goal: 'Inspire gift consideration and saves.' },
  { day: 7, platform: 'TikTok', pillar: 'Craft & Process', format: 'Short video', title: 'Behind the making', hook: 'Watch a simple material become a statement piece.', goal: 'Increase video discovery.' },
  { day: 8, platform: 'Instagram', pillar: 'Styling & Wearing', format: 'Reel', title: 'One piece, three looks', hook: 'One jewellery piece. Three different moods.', goal: 'Show versatility and encourage saves.' },
  { day: 9, platform: 'Facebook', pillar: 'Community & Proof', format: 'Image post', title: 'Meet the brand', hook: 'The little details behind Noor Atelier.', goal: 'Build familiarity and trust.' },
  { day: 10, platform: 'Pinterest', pillar: 'Gifting & Occasions', format: 'Pin board', title: 'Wedding guest gift ideas', hook: 'Small gifts for meaningful moments.', goal: 'Reach occasion-based searches.' },
  { day: 11, platform: 'Instagram', pillar: 'Craft & Process', format: 'Carousel', title: 'Materials and details', hook: 'What makes a piece feel special?', goal: 'Educate the audience and build product value.' },
  { day: 14, platform: 'Instagram', pillar: 'Gifting & Occasions', format: 'Story countdown', title: 'Festive gifting countdown', hook: 'The season of thoughtful gifting is here.', goal: 'Create timely buying interest.' },
  { day: 15, platform: 'TikTok', pillar: 'Styling & Wearing', format: 'Short video', title: 'Everyday jewellery styling', hook: 'Your everyday outfit, with one finishing touch.', goal: 'Reach style-conscious viewers.' },
  { day: 16, platform: 'Instagram', pillar: 'Gifting & Occasions', format: 'Reel', title: 'Festive collection concept', hook: 'A little sparkle for the celebrations ahead.', goal: 'Introduce the seasonal collection concept.' },
  { day: 17, platform: 'WhatsApp', pillar: 'Community & Proof', format: 'Broadcast', title: 'Collection update', hook: 'A first look at what is new.', goal: 'Share updates with an opted-in audience.' },
  { day: 18, platform: 'Instagram', pillar: 'Styling & Wearing', format: 'Carousel', title: 'How to stack your rings', hook: 'Mix, match and make it yours.', goal: 'Encourage saves and styling inspiration.' },
  { day: 21, platform: 'Instagram', pillar: 'Community & Proof', format: 'Story Q&A', title: 'Ask us about jewellery care', hook: 'Your jewellery questions, answered.', goal: 'Build trust through useful replies.' },
  { day: 22, platform: 'Instagram', pillar: 'Gifting & Occasions', format: 'Reel', title: 'Order date reminder', hook: 'Planning a gift? Here is your reminder.', goal: 'Communicate a timely purchase prompt.' },
  { day: 23, platform: 'TikTok', pillar: 'Craft & Process', format: 'Short video', title: 'Packing an order', hook: 'A little care goes into every package.', goal: 'Show the customer experience.' },
  { day: 25, platform: 'Instagram', pillar: 'Community & Proof', format: 'Story', title: 'Seasonal wishes', hook: 'Wishing you moments worth remembering.', goal: 'Maintain a warm brand connection.' },
  { day: 28, platform: 'Facebook', pillar: 'Community & Proof', format: 'Community post', title: 'Your favourite pieces', hook: 'Which design would you choose?', goal: 'Invite comments and feedback.' },
  { day: 30, platform: 'Instagram', pillar: 'Styling & Wearing', format: 'Carousel', title: 'Year-end styling edit', hook: 'A few favourites to take into the new year.', goal: 'Inspire saves and future styling ideas.' },
]

const platformColors: Record<Platform, string> = {
  Instagram: '#B88D91',
  TikTok: '#8D9FA7',
  Pinterest: '#B49A73',
  Facebook: '#82978C',
  WhatsApp: '#82978C',
}

export default function NoorAtelierStrategy() {
  const [filter, setFilter] = useState<'All' | Platform>('All')
  const [selected, setSelected] = useState<CalendarItem | null>(calendar[0])

  const visibleItems = calendar.filter(
    (item) => filter === 'All' || item.platform === filter
  )

  const firstDayOffset = 1 // December 1, 2026 is Tuesday (Monday-first calendar).
  const emptyCells = Array.from({ length: firstDayOffset }, (_, i) => `empty-${i}`)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <section className="space-y-16">
      <div className="rounded-3xl border border-blush/30 bg-surface p-6 md:p-10">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-blush/50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-blush">
            Concept Project
          </span>
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Sample strategy · December 2026
          </span>
        </div>

        <p className="text-xs uppercase tracking-[0.3em] text-blush">Noor Atelier</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-foreground md:text-6xl">
          Content strategy for fine jewellery.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          An independent concept project for a fictional handmade jewellery
          label. Created to demonstrate strategic planning, creative direction
          and platform-specific content thinking.
        </p>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          The brand, campaign and calendar are illustrative. This is a sample
          strategy, not a real client campaign or a report of achieved results.
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blush">01 / Strategy</p>
        <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
          The thinking behind the content.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ['Primary goal', 'Build brand discovery, audience trust and purchase interest.'],
            ['Target audience', 'Women aged 22–38 interested in jewellery, styling and gifting.'],
            ['Brand voice', 'Warm, thoughtful, calm and detail-focused.'],
            ['Content journey', 'Discovery through short videos, trust through craft and community, buying through product stories and direct conversations.'],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-serif text-xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blush">02 / Content pillars</p>
        <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
          Four themes. One consistent story.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar, index) => (
            <div key={pillar.name} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Pillar 0{index + 1}
                </span>
                <span className="font-serif text-2xl text-foreground">{pillar.share}</span>
              </div>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-border">
                <div className="h-full rounded-full" style={{ width: pillar.share, backgroundColor: pillar.color }} />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-foreground">{pillar.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blush">03 / Creative direction</p>
        <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
          Soft, considered and detail-led.
        </h2>
        <div className="mt-7 rounded-3xl border border-border bg-surface p-6 md:p-8">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The visual direction pairs delicate product details with soft
            daylight, understated backgrounds and editorial compositions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              ['Soft Ivory', '#F5F7F4'],
              ['Deep Navy', '#263847'],
              ['Teal Blue', '#527D89'],
              ['Soft Grey Aqua', '#EAF0EF'],
            ].map(([name, color]) => (
              <div key={name} className="flex items-center gap-3 rounded-full border border-border px-3 py-2">
                <span className="size-7 rounded-full border border-black/10" style={{ backgroundColor: color }} />
                <span className="text-xs text-foreground/80">{name}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Photography direction: soft natural light, close-up craftsmanship,
            ivory and grey backgrounds, and styling that keeps the jewellery
            as the focal point.
          </p>
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blush">04 / Platform strategy</p>
        <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
          One brand, tailored for each platform.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ['Instagram', 'Reels for discovery, carousels for styling and education, and Stories for polls, Q&A and product conversations.'],
            ['TikTok', 'Short, native-feeling videos featuring making processes, packing orders and outfit styling.'],
            ['Pinterest', 'Evergreen visual pins, bridal moodboards, jewellery styling and gift inspiration.'],
            ['Facebook', 'Community updates, product highlights, reviews and useful brand information.'],
            ['WhatsApp', 'Opt-in broadcasts for collection updates, availability and direct customer conversations.'],
          ].map(([name, description]) => (
            <div key={name} className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-blush">{name}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="content-calendar" className="scroll-mt-28">
        <p className="text-xs uppercase tracking-[0.3em] text-blush">05 / Monthly calendar</p>
        <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
          December 2026 content plan.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Select a platform to filter the calendar. Choose a scheduled day to
          explore its content format, creative hook and intended goal.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {platforms.map((platform) => (
            <button
              key={platform}
              type="button"
              onClick={() => {
                setFilter(platform)
                const first = calendar.find((item) => platform === 'All' || item.platform === platform)
                setSelected(first ?? null)
              }}
              className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                filter === platform
                  ? 'border-blush bg-blush text-[#171416]'
                  : 'border-border text-muted-foreground hover:border-blush/60 hover:text-foreground'
              }`}
            >
              {platform}
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface p-3 sm:p-5">
          <div className="mb-3 grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-wider text-muted-foreground sm:gap-2 sm:text-xs">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="py-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {emptyCells.map((cell) => <div key={cell} />)}
            {days.map((day) => {
              const item = visibleItems.find((entry) => entry.day === day)
              const isSelected = selected?.day === day && selected?.platform === item?.platform
              return (
                <button
                  key={day}
                  type="button"
                  disabled={!item}
                  onClick={() => item && setSelected(item)}
                  className={`min-h-14 rounded-lg border p-1 text-left transition-colors sm:min-h-24 sm:rounded-xl sm:p-2 ${
                    isSelected
                      ? 'border-blush bg-blush/10'
                      : item
                        ? 'border-border hover:border-blush/60'
                        : 'cursor-default border-transparent opacity-50'
                  }`}
                >
                  <span className="text-xs text-muted-foreground">{day}</span>
                  {item && (
                    <span className="mt-1 block">
                      <span className="block size-1.5 rounded-full sm:size-2" style={{ backgroundColor: platformColors[item.platform] }} />
                      <span className="mt-1 hidden text-[10px] leading-tight text-foreground/80 sm:block">
                        {item.platform}
                      </span>
                      <span className="mt-1 hidden text-[10px] leading-tight text-muted-foreground md:block">
                        {item.format}
                      </span>
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {selected && visibleItems.some((item) => item.day === selected.day && item.platform === selected.platform) ? (
          <div className="mt-5 rounded-2xl border border-blush/30 bg-surface p-6 md:p-8" aria-live="polite">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.2em] text-blush">
                December {selected.day} · {selected.platform}
              </p>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                {selected.pillar}
              </span>
            </div>
            <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">{selected.title}</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {[
                ['Format', selected.format],
                ['Creative hook', selected.hook],
                ['Content goal', selected.goal],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-blush">{label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-5 rounded-2xl border border-border bg-surface p-6 text-sm text-muted-foreground">
            No scheduled content for this day on the selected platform.
          </p>
        )}
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blush">06 / Measurement</p>
        <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
          What success would look like.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          These are proposed planning targets for the fictional concept brand,
          not measured or achieved campaign results.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            ['+25%', 'Proposed follower-growth target', 'Measured through follower growth over the planning period.'],
            ['+30%', 'Proposed online-order target', 'Measured through tracked online orders against a defined baseline.'],
          ].map(([value, label, detail]) => (
            <div key={label} className="rounded-2xl border border-border bg-surface p-6">
              <p className="font-serif text-4xl text-foreground">{value}</p>
              <p className="mt-2 text-sm text-blush">{label}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
          Suggested supporting metrics: reach, saves, shares, profile visits,
          story replies, link clicks and conversion rate.
        </p>
      </div>
    </section>
  )
}
